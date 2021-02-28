PROGRAM PaulRevereHttp(INPUT, OUTPUT);
USES
  DOS;
VAR
  LanternsMessage: STRING;

FUNCTION GetQueryStringParameter(VAR Parameter: STRING): STRING;
VAR
  QueryString, ParameterWithEquality: STRING;
  QueryLength, ValueLength: INTEGER;
BEGIN {GetQueryStringParameter}
  QueryString := GetEnv('QUERY_STRING');
  QueryLength := LENGTH(QueryString);
  ParameterWithEquality := CONCAT(Parameter, '=');
  IF (POS(ParameterWithEquality, QueryString) <> 0)
  THEN
    BEGIN
      QueryString := COPY(QueryString, POS(ParameterWithEquality, QueryString), QueryLength);
      IF (POS('&', QueryString) <> 0)
      THEN
        BEGIN
          ValueLength := POS('&', QueryString)-1 - POS('=', QueryString);
          GetQueryStringParameter := COPY(QueryString, POS('=', QueryString)+1, ValueLength)
        END
      ELSE
        GetQueryStringParameter := COPY(QueryString, POS('=', QueryString)+1, QueryLength)
    END
  ELSE
    GetQueryStringParameter := ''
END; {GetQueryStringParameter}

FUNCTION CreateLanternsMessage: STRING;
VAR
  LanternsString, Lanterns: STRING;
BEGIN {CreateLanternsMessage}
  Lanterns := 'lanterns';
  LanternsString := GetQueryStringParameter(Lanterns);
  IF (LanternsString = '')
  THEN
    CreateLanternsMessage := 'nothing';
  IF (LanternsString = '1')
  THEN
    CreateLanternsMessage := 'British are coming by land'
  ELSE
    IF (LanternsString = '2')
    THEN
      CreateLanternsMessage := 'British are coming by sea'
    ELSE
      IF (LanternsString = '3')
      THEN
        CreateLanternsMessage := 'British are coming by air'
      ELSE
        CreateLanternsMessage := CONCAT('The North Church shows ', LanternsString)
END; {CreateLanternsMessage}

FUNCTION CreateHttpResponse(VAR Message: STRING): STRING;
BEGIN {CreateHttpResponse}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN(Message)
END; {CreateHttpResponse}

BEGIN {PaulRevereHttp}
  LanternsMessage := CreateLanternsMessage;
  CreateHttpResponse(LanternsMessage)
END. {PaulRevereHttp}


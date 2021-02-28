PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
VAR
  FirstName, LastName, Age: STRING;

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

BEGIN {WorkWithQueryString}
  FirstName := 'first_name';
  LastName := 'last_name';
  Age := 'age';
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter(FirstName));
  WRITELN('Last Name: ', GetQueryStringParameter(LastName));
  WRITELN('Age: ', GetQueryStringParameter(Age));
END. {WorkWithQueryString}

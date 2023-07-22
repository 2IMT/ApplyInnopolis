FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /Backend
COPY . ./
RUN dotnet publish ApplyInnopolisAPI -c Release -o out
COPY /ApplyInnopolisAPI/out .
EXPOSE 5208 
ENTRYPOINT ["./ApplyInnopolisAPI", "--urls", "http://127.0.0.1:5208"]

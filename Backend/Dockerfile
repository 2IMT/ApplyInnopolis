FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /Backend
COPY . ./
RUN dotnet publish ApplyInnopolisAPI -c Release -o out
# COPY /out .
EXPOSE 5208 
ENTRYPOINT dotnet out/ApplyInnopolisAPI.dll --urls http://0.0.0.0:5000

import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT, () => console.log(`Server is running in port: ${process.env.PORT}`));
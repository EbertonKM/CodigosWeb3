import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()
        const request = context.getRequest<Request>()
        const status = exception.getStatus()
        const erroResponse = exception.getResponse()

        console.log("[FILTER]...")

        response.status(status).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            message: erroResponse !== "" ? erroResponse : "Mensagem padrão para erro vazio"
        })
    }
    
}
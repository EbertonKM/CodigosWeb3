import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        //Verificando se existe o user que vem do middleware

        console.log(request['user'])

        if(request['user']?.role === 'admin')
            return true

        return false //true = seguir o fluxo, false = parar o fluxo
    }
    
}
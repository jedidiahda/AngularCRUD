import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, NgModelGroup } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:ConfirmEqualValidatorDirective,
        multi:true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator{
    @Input('ngModelGroup') default :boolean
    validate(passwordGroup: AbstractControl): {[key:string]: any} | null {
        /*if(  passwordGroup.controls && passwordGroup.controls.password && passwordGroup.controls.confirmPassword
            && passwordGroup.controls.password.value !== passwordGroup.controls.confirmPassword.value){
            return {'notEqual':true};
        }*/
        return null;
    }    
    
    registerOnValidatorChange?(fn: () => void): void {
        //throw new Error("Method not implemented.");
    }


}
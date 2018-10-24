import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";
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
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key:string]: any} | null {
        //the parent of control is root element form
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notEqual':true};
        }
        return null;
    }    
    
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }


}
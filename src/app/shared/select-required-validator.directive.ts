import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[appSelectValidator]',
    //register custom validate
    providers:[{
        provide: NG_VALIDATORS,//bit token
        useExisting: SelectRequiredValidatorDirector,//to signal angualar to add this validator to its list
        multi:true,
    }]
})
export class SelectRequiredValidatorDirector implements Validator{
    //need to be the same name to be configurable
    @Input('appSelectValidator') defaultValue: string;
    validate(control: AbstractControl): {[key:string]: any} | null {
        return control.value === this.defaultValue ? 
            {'defaultSelected':true}:null;
    }    
    
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }


  
}
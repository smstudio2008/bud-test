import{$b as E,Ja as a,Ka as _,Qa as C,Rb as y,Ua as v,Ub as k,Va as u,Xa as t,Ya as o,Za as d,ab as P,ac as m,ba as b,bb as c,bc as U,cb as S,cc as A,dc as z,ec as l,fb as r,fc as B,gb as N,hc as V,ib as F,ic as H,jb as M,jc as I,kc as j,lc as D,mb as O,na as g,nb as w,wa as h,xa as x}from"./chunk-MBW5URTO.js";var p=(()=>{class n{constructor(){this._user=C(null),this.user=this._user.asReadonly()}initUser(e){this._user.set(e)}updateUser(e){this._user.set(e)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function R(n,G){if(n&1){let e=P();t(0,"div",18),d(1,"input",19),t(2,"button",20),c("click",function(){let s=h(e).index,f=S();return x(f.removePhoneNumber(s))}),r(3,"Remove"),o()()}if(n&2){let e=G.index;a(),u("formControlName",e)}}var Y=(()=>{class n{constructor(e){this.userStore=e,this.userForm=new z({name:new l("",[m.required]),email:new l("",[m.required,m.email]),phoneNumbers:new j([])})}get phoneNumbers(){return this.userForm.get("phoneNumbers")}ngOnInit(){let e=this.userStore.user();e&&this.populateForm(e)}onUpdateUser(){let e=this.userForm.value;this.userStore.updateUser(e)}removePhoneNumber(e){this.phoneNumbers.removeAt(e)}addPhoneNumber(){this.userForm.get("phoneNumbers").push(new l("",m.required))}populateForm(e){this.userForm.patchValue({name:e.name,email:e.email});let i=this.userForm.get("phoneNumbers");i.clear(),e.phoneNumbers.forEach(s=>i.push(new l(s,m.required)))}static{this.\u0275fac=function(i){return new(i||n)(_(p))}}static{this.\u0275cmp=g({type:n,selectors:[["bud-admin-users-signals-home"]],standalone:!0,features:[F([p]),M],decls:31,vars:5,consts:[[1,"form-container"],[1,"form-title"],[1,"form-description"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["formControlName","name","placeholder","Enter your name"],["for","email"],["formControlName","email","placeholder","Enter your email"],["formArrayName","phoneNumbers",1,"form-group"],["class","phone-item",4,"ngFor","ngForOf"],["type","button",1,"btn-add",3,"click"],[1,"form-actions"],["type","submit",1,"btn-submit"],[1,"results"],[1,"results-title"],[1,"results-description"],[1,"results-code"],[1,"phone-item"],["placeholder","Enter phone number",3,"formControlName"],["type","button",1,"btn-remove",3,"click"]],template:function(i,s){i&1&&(t(0,"div",0)(1,"h3",1),r(2,"User Registration Form"),o(),t(3,"p",2),r(4,"Please fill out the details below. Ensure all fields are valid before submission."),o(),t(5,"form",3),c("ngSubmit",function(){return s.onUpdateUser()}),t(6,"div",4)(7,"label",5),r(8,"Name:"),o(),d(9,"input",6),o(),t(10,"div",4)(11,"label",7),r(12,"Email:"),o(),d(13,"input",8),o(),t(14,"div",9)(15,"label"),r(16,"Phone Numbers:"),o(),v(17,R,4,1,"div",10),t(18,"button",11),c("click",function(){return s.addPhoneNumber()}),r(19,"Add Phone Number"),o()(),t(20,"div",12)(21,"button",13),r(22,"Submit"),o()()()(),t(23,"div",14)(24,"h4",15),r(25,"Signal Data"),o(),t(26,"p",16),r(27,"Below is the live state of the signal data:"),o(),t(28,"code",17),r(29),O(30,"json"),o()()),i&2&&(a(5),u("formGroup",s.userForm),a(12),u("ngForOf",s.phoneNumbers.controls),a(12),N(w(30,3,s.userStore.user())))},dependencies:[D,B,E,U,A,V,I,H,y,k],styles:[".form-container[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;width:100%;max-width:500px;margin-top:20px}.form-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#333;margin-bottom:10px}.form-description[_ngcontent-%COMP%]{font-size:1rem;color:#666;margin-bottom:20px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:15px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;margin-bottom:5px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px 12px;font-size:1rem;border:1px solid #ccc;border-radius:4px}.phone-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.phone-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;margin-right:10px}.btn-remove[_ngcontent-%COMP%]{background-color:#e74c3c;color:#fff;border:none;padding:5px 10px;font-size:.9rem;border-radius:4px;cursor:pointer;transition:background-color .3s}.btn-remove[_ngcontent-%COMP%]:hover{background-color:#c0392b}.btn-add[_ngcontent-%COMP%]{background-color:#3498db;color:#fff;border:none;padding:8px 12px;font-size:.9rem;border-radius:4px;cursor:pointer;transition:background-color .3s}.btn-add[_ngcontent-%COMP%]:hover{background-color:#2980b9}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btn-undo[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%]{background-color:#2ecc71;color:#fff;border:none;padding:10px 15px;font-size:1rem;border-radius:4px;cursor:pointer;transition:background-color .3s}.btn-undo[_ngcontent-%COMP%]:hover{background-color:#27ae60}.btn-submit[_ngcontent-%COMP%]:hover{background-color:#1abc9c}.results[_ngcontent-%COMP%]{background-color:#eef5ff;padding:20px;border-radius:8px;margin-top:20px;width:100%;max-width:500px;box-shadow:0 4px 8px #0000001a}.results-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#2c3e50;margin-bottom:10px}.results-description[_ngcontent-%COMP%]{font-size:1rem;color:#34495e;margin-bottom:15px}.results-code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background-color:#f8f9fa;padding:10px;border:1px solid #ddd;border-radius:4px;color:#333;font-size:.875rem;overflow-x:auto}"]})}}return n})();export{Y as BudAdminFeaturesUsersSignalHomeComponent};
class UserInfo
{
    #fname;
    #lname;
    #email;
    #gender;
    #mobile;
    #country;
    #zone;
    #area;
    #cardtype;
    #cardno;
    #expiry;
    errors;
    flag;
    
    constructor()
    {
        this.errors = {
            fname: "", lname : '', gender : '',email:'',mobile:'',country:'',zone:'',area:'',ctype:'',cnumber:'',expiry:''
        };
        this.flag=true;
        this.initialize();
   }
   initialize()
    {
        this.#fname = '';
        this.#lname = '';
        this.#email = '';
        this.#gender = '';
        this.#mobile = '';
        this.#country = '';
        this.#zone = '';
        this.#area = '';
        this.#cardtype = '';
        this.#cardno = '';
        this.#expiry = '';
       
   }
   setValue(type, val)
    {
        if(type=='fname')
            this.#fname = val;
        else if(type=='lname')
            this.#lname = val;
        else if(type=='gender')
            this.#gender = val;
        else if(type=='email')
            this.#email = val;
        else if(type=='mobile')
            this.#mobile = val;
        else if(type=='country')
            this.#country = val;
        else if(type=='zone')
            this.#zone = val;
        else if(type=='area')
            this.#area = val;
        else if(type=='ctype')
            this.#cardtype = val;
        else if(type=='cnumber')
            this.#cardno = val;
        else 
            this.#expiry = val;
                
   }
   validate()
   {
        if(this.#fname=='')
        {
           console.log('1');
            this.errors.fname = "Fisrt name required";
            this.flag=false;
        }
        else if(this.#fname.length<3)
        {
            this.errors.fname = "Fisrt name required minumum 3 characters";
            this.flag=false;
            console.log('2');
        }
        else  this.errors.fname = "";
        if(this.#lname=='')
        {
           
            this.errors.lname =  "Last name required";
            this.flag=false;
            console.log('2');
        }
        else  this.errors.lname = "";
        if(this.#gender)
            this.errors.gender = "";
        else  
        {
            this.errors.gender =  "Gender required";
            this.flag=false;
            console.log('3');
        }
        if(this.#mobile=='')
        {
            this.errors.mobile = "Mobile required";
            this.flag=false;
            console.log('4');
        }
        else
        {
            var pattern = /^[\+]?[(]?[ 0-9]{3}[)]?[-\ s\. ]?[0-9]{3}[-\s\. ]?[0-9]{4,6}$/im
            if(!pattern.test(this.#mobile))
            {
                this.errors.mobile = "Mobile is not valid";
            this.flag=false;
            console.log('5');
            }
            else  this.errors.mobile = "";
        }
        if(this.#email=='')
        {
            this.errors.email = "Email required";
            this.flag=false;
            console.log('6');
        }
        else
        {
            var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            if(!pattern.test(this.#email))
            {
                this.errors.email = "Email is not valid";
                this.flag=false;
                console.log('7');
            }
            else  this.errors.email = "";
        }
        if(this.#country=='')
        {
            this.errors.country = "Country required";
            this.flag=false;
            console.log('8');
        }
        else  this.errors.country = "";
        if(this.#zone=='')
        {
            this.errors.zone = "Zone required";
            this.flag=false;
            console.log('9');
        }
        else  this.errors.zone = "";
        if(this.#area=='')
        {
            this.errors.area = "Area code required";
            this.flag=false;
            console.log('10');
        }
        else
        {
            var pattern = /^[a-zA-Z0-9]{6,}$/
            console.log(this.#area);
            if(!pattern.test(this.#area))
            {
                this.errors.area = " Area code is not valid";
                this.flag=false;
                console.log('11');
            }
            else  this.errors.area = "";
        }
        if(this.#cardtype=='')
        {
           
            this.errors.ctype =  "Card type required";
            this.flag=false;
            console.log('12');
        }
        else  this.errors.ctype = "";
        if(this.#cardno=='')
        {
            this.errors.cnumber =  "Card no required";
            this.flag=false;
            console.log('13');
        }
        else
        {
            var pattern = /^[0-9]{16}$/
            if(!pattern.test(this.#cardno))
            {
                this.errors.cnumber =   "Card no is not valid";
                this.flag=false;
                console.log('14');
            }
            else  this.errors.cnumber = "";
        }
        if(this.#expiry=='')
        {
            this.errors.expiry =  "Card Expiry required";
            this.flag=false;
            console.log('15');
        }
        else
        {
            var pattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
            if(!pattern.test(this.#expiry))
            {
                this.errors.expiry =  "Card Expiry is not valid";
                this.flag=false;
                console.log('16');
            }
            else  this.errors.expiry = "";
        }
       
   }
   submitForm()
   {
        if(this.flag==true)
        {
            var response = {
                status : this.flag
            }
        }
        else{
           
            var response = {
                status : this.flag,
                errors : this.errors
            }
            var cook = {
                fname: this.#fname, 
                lname : this.#lname, 
                gender : this.#gender,
                email:this.#email,
                mobile:this.#mobile,
                country:this.#country,
                zone:this.#zone,
                area:this.#area,
                ctype:this.#cardtype,
                cnumber:this.#cardno,
                expiry:this.#expiry
            };
            document.cookie = "userinfo="+JSON.stringify(cook);
        }
        
        return response;
   }

}
class pAJAX {
        constructor(){
        this.p = new XMLHttpRequest();
        }
        peticion (url, metodo, fRespuesta = null, param = ""){
          metodo = metodo.toUpperCase();
          var p = this.p;
          if (fRespuesta!=null){  
            this.p.onreadystatechange = function(){
            if ((p.readyState == 4) && (p.status == 200))
              fRespuesta(p.responseText);
            };
          }
        if (metodo=="GET"){
          if (param.trim().length >0)
            url += "?" + param;
          this.p.open(metodo, url);
          this.p.send(null);
        }
        if (metodo=="POST"){
          this.p.open(metodo, url);
          this.p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          this.p.send(param);
        }

        }
      }
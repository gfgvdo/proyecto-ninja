import{c as E}from"./index-d377ea6d.js";let u;const U=new Uint8Array(16);function h(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(U)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function w(e,n=0){return a[e[n+0]]+a[e[n+1]]+a[e[n+2]]+a[e[n+3]]+"-"+a[e[n+4]]+a[e[n+5]]+"-"+a[e[n+6]]+a[e[n+7]]+"-"+a[e[n+8]]+a[e[n+9]]+"-"+a[e[n+10]]+a[e[n+11]]+a[e[n+12]]+a[e[n+13]]+a[e[n+14]]+a[e[n+15]]}const b=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),i={randomUUID:b};function j(e,n,t){if(i.randomUUID&&!n&&!e)return i.randomUUID();e=e||{};const l=e.random||(e.rng||h)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,n){t=t||0;for(let o=0;o<16;++o)n[t+o]=l[o];return n}return w(l)}const k={host:"aws.connect.psdb.cloud",username:"isyb5gmupy7elrqbuabs",password:"pscale_pw_586AdDcjidSodPuRBpfnnXzrueSDmzAq7fk5dZch125"},g=E(k),m="http://localhost:5173",R=document.getElementById("form"),x=document.getElementById("links");R.addEventListener("submit",q);const D=document.getElementById("restart");D.addEventListener("click",B);const r=j();let y=null,p=null;async function q(e){e.preventDefault();var n=document.querySelector("#enlaceJugador1").value,t=document.querySelector("#enlaceJugador2").value,l=document.querySelector("#nombreJuez1").value,o=document.querySelector("#enlaceJuez1").value,d=document.querySelector("#nombreJuez2").value,s=document.querySelector("#enlaceJuez2").value;n==""?(document.getElementById("enlaceJugador1").focus(),alert("Favor de llenar los campos faltantes >:v ")):t==""?(document.getElementById("enlaceJugador2").focus(),alert("Favor de llenar los campos faltantes >:v ")):l==""?(document.getElementById("nombreJuez1").focus(),alert("Favor de llenar los campos faltantes >:v ")):o==""?(document.getElementById("enlaceJuez1").focus(),alert("Favor de llenar los campos faltantes >:v ")):d==""?(document.getElementById("nombreJuez2").focus(),alert("Favor de llenar los campos faltantes >:v ")):s==""&&(document.getElementById("enlaceJuez2").focus(),alert("Favor de llenar los campos faltantes >:v "));const v="INSERT INTO room (`uuid_sala`, `playerlink_1`, `playerlink_2`, `juezname_1`,`juezlink_1`,`juezname_2`,`juezlink_2`) VALUES (:uuid, :epy1, :epy2, :njz1, :ejz1, :njz2, :ejz2)",_={uuid:r,epy1:n,epy2:t,njz1:l,ejz1:o,njz2:d,ejz2:s};await g.execute(v,_);let z=new URLSearchParams(new URL(n).search).get("view"),J=new URLSearchParams(new URL(t).search).get("view");y=m+"/room/index.html?room_uuid="+r+"&stream_id="+z,p=m+"/room/index.html?room_uuid="+r+"&stream_id="+J;const S=m+"/room/index.html?room_uuid="+r,I={playerlink1:y,playerlink2:p,url:S,room:r};localStorage.setItem("room",JSON.stringify(I))}let c=JSON.parse(localStorage.getItem("room"));x.innerHTML=`
  <ul>
    <li> Enlace Jugador 1: ${c.playerlink1} </li>
    <li> Enlace Jugador 1: ${c.playerlink2} </li>
    <hr>
    <li> Enlace Sala: ${c.url} </li>
  <ul>  
`;async function B(){let e=c.uuid;const n="UPDATE room SET camara_seleccionada = :camera_id where uuid_sala = :sala",t={sala:e,camera_id:null};await g.execute(n,t)}

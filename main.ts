import{mkdirSync as K,readdirSync as L,readFileSync as F,writeFileSync as W}from"node:fs";
const M="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function r(p,q){
let D=new Int32Array(256),C=new Int32Array(64),Y=new Int32Array(256),o=new Uint8Array(65536),s=0,c=0,l=0,i=0,pc=0,t=0,n=p.length;
const T=e=>({out:o.slice(0,l),code:e});
for(;;){
if(t==1e6)return T(10);
if(pc<0||pc>=n)return T(9);
const g=p[pc],k=M.charCodeAt(g)-32;
if(!k)return T(5);
const v=k-1,im=v>>4,pp=(v>>2)&3,pu=v&3;
if(pc+im>=n)return T(9);
t++;
if(s<pp)return T(2);
if(s-pp+pu>256)return T(3);
const x=pc+1+im;pc=x;
switch(g){
case 0:return T(0);
case 1:D[s++]=(p[x-1]<<24)>>24;break;
case 2:D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:s--;break;
case 4:D[s++]=D[s-2];break;
case 5:{const a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;}
case 6:D[s++]=D[s-3];break;
case 7:{const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
const b=D[s-1],a=D[s-2];let e;
if(g>18&&g<23&&!b)return T(4);
if(g==16)e=a+b|0;else if(g==17)e=a-b|0;else if(g==18)e=Math.imul(a,b);else if(g==19)e=a/b|0;else if(g==20)e=a%b|0;else if(g==21)e=(a>>>0)/(b>>>0)|0;else if(g==22)e=(a>>>0)%(b>>>0)|0;else if(g==24)e=a&b;else if(g==25)e=a|b;else if(g==26)e=a^b;else if(g==28)e=a<<b;else if(g==29)e=a>>b;else if(g==30)e=a>>>b|0;else if(g==32)e=a==b?1:0;else if(g==33)e=a<b?1:0;else e=(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=e;break;}
case 48:case 49:case 50:{
const y=((p[x-2]|p[x-1]<<8)<<16)>>16;let u=1;
if(g!=48){const a=D[--s];u=g==49?a==0:a!=0}
if(u)pc=x+y;break;}
case 51:
if(c==64)return T(7);
C[c++]=x;pc=p[x-2]|p[x-1]<<8;break;
case 52:
if(!c)return T(8);
pc=C[--c];break;
case 64:{const a=D[s-1];if(a<0||a>255)return T(6);D[s-1]=Y[a];break;}
case 65:{const a=D[s-1],b=D[s-2];if(a<0||a>255)return T(6);s-=2;Y[a]=b;break;}
case 80:{const z=String(D[s-1]);if(l+z.length>65536)return T(11);s--;for(let h=0;h<z.length;h++)o[l++]=z.charCodeAt(h);break;}
case 81:
if(l+1>65536)return T(11);
o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return T(D[--s]&255);
}
}
}
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const d of L(I).sort()){const A=I+"/"+d,B=O+"/"+d,z=r(F(A+"/program.bin"),F(A+"/input.bin"));K(B,{recursive:true});W(B+"/stdout.bin",z.out);W(B+"/exit.txt",z.code+"\n");}

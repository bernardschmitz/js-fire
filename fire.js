q=0;c=78;u=4800;K=16;m=255;M=Math;F=M.floor;R=M.random;D=document;
C=D.body.children[0];w=C.width=innerWidth;h=(C.height=innerHeight)
*.95;z=C.getContext("2d");O=D.createElement("canvas");o=O.getContext("2d");
n=[];for(x=u*2;x--;)n[x]=0;a=[];j=[];v=[];for(i=256;i--;)a[i]=i<K?0:i<32?
2*(i-K):i<64?F(K+(i-32)*7.5):m,j[i]=i<64?0:i<112?F(85*(i-64)/K):m,
v[i]=i<K?2*i:i<32?32-(i-K)*2:i<112?0:i<160?F(85*(i-96)/K):m;function l(){
f=q*u;q^=1;s=k=q*u;for(x=c;--x;)t=f+x+4720,n[t-80]=F(R()*K+64),n[t]=
F(R()*K+64),n[t+80]=F(R()*K+128);for(b=F(R()*K+1);b--;)t=f+F(R()*c+1)+4559,
n[t++]=n[t++]=n[t]=n[t+=c]=n[++t]=n[++t]=n[t+=c]=n[++t]=n[++t]=m;for(i=4524;i--;)
b=n[f++]+n[f++]+n[f]+n[f+=c]+n[f+=2]+n[f+=c]+n[++f]+n[++f]>>3,b>0&&b--,f-=161,
n[++s]=b,i%c==0&&(f+=2,s+=2);d=o.getImageData(0,0,80,60);g=d.data;while(x<u*4)
g[x++]=a[e=n[k++]],g[x++]=j[e],g[x++]=v[e],g[x++]=m;o.putImageData(d,0,0);
z.drawImage(O,0,0,80,57,0,0,w,h);setTimeout(l,25)}l()

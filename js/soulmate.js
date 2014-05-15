function kalCinta()
    {
        Cowok = document.getElementById('cowok').value.toUpperCase();
        CowokLength = Cowok.length;
        Cewek = document.getElementById('cewek').value.toUpperCase();
        CewekLength = Cewek.length;

        var kalkulasi=0;
        for(var i=0;i<CowokLength;i++)
        {
            var L1=Cowok.substring(i,i+2);
            if(L1=='A') kalkulasi +=2;
            if(L1=='B') kalkulasi +=1;
            if(L1=='C') kalkulasi +=4;
            if(L1=='D') kalkulasi +=3;
            if(L1=='E') kalkulasi +=5;
            if(L1=='F') kalkulasi +=6;        
            if(L1=='G') kalkulasi +=3;
            if(L1=='H') kalkulasi +=2;
            if(L1=='I') kalkulasi +=1;
            if(L1=='J') kalkulasi +=4;          
            if(L1=='K') kalkulasi +=3;
            if(L1=='L') kalkulasi +=5;
            if(L1=='M') kalkulasi +=2;
            if(L1=='N') kalkulasi +=1;
            if(L1=='O') kalkulasi +=3;
            if(L1=='P') kalkulasi +=5;
            if(L1=='Q') kalkulasi +=3;
            if(L1=='R') kalkulasi +=5;
            if(L1=='S') kalkulasi +=2;
            if(L1=='T') kalkulasi +=4;
            if(L1=='U') kalkulasi +=3;
            if(L1=='V') kalkulasi +=1;
            if(L1=='W') kalkulasi +=3;
            if(L1=='X') kalkulasi +=2;
            if(L1=='Y') kalkulasi +=7;
            if(L1=='Z') kalkulasi +=4;

        }
        
        for (var hitung = 0; hitung < CewekLength; hitung++)
        {
            var L2 = Cewek.substring(hitung, hitung + 1);

            if(L2=='A') kalkulasi +=2;
            if(L2=='B') kalkulasi +=4;
            if(L2=='C') kalkulasi +=1;
            if(L2=='D') kalkulasi +=4;
            if(L2=='E') kalkulasi +=5;
            if(L2=='F') kalkulasi +=6;
            if(L2=='G') kalkulasi +=2;
            if(L2=='H') kalkulasi +=1;
            if(L2=='I') kalkulasi +=2;
            if(L2=='J') kalkulasi +=3;
            if(L2=='K') kalkulasi +=1;
            if(L2=='L') kalkulasi +=4;
            if(L2=='M') kalkulasi +=5;
            if(L2=='N') kalkulasi +=7;
            if(L2=='O') kalkulasi +=2;
            if(L2=='P') kalkulasi +=3;
            if(L2=='Q') kalkulasi +=2;
            if(L2=='R') kalkulasi +=4;
            if(L2=='S') kalkulasi +=5;
            if(L2=='T') kalkulasi +=1;
            if(L2=='U') kalkulasi +=2;
            if(L2=='V') kalkulasi +=3;
            if(L2=='W') kalkulasi +=2;
            if(L2=='X') kalkulasi +=4;
            if(L2=='Y') kalkulasi +=1;
            if(L2=='Z') kalkulasi +=3;

        }

        var Jumlah = 0;

        if (kalkulasi > 0) Jumlah = 5 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 2) Jumlah = 10 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 4) Jumlah = 20 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 6) Jumlah = 30 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 8) Jumlah = 40 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 10) Jumlah = 50 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 12) Jumlah = 60 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 14) Jumlah = 70 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 16) Jumlah = 80 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 18) Jumlah = 90 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 20) Jumlah = 100 - ((CowokLength + CewekLength) / 2)
        if (kalkulasi > 22) Jumlah = 110 - ((CowokLength + CewekLength) / 2)
        if (CowokLength == 0 || CewekLength == 0)
        
        {
        Jumlah = "Error";
        document.getElementById("hasil").innerHTML=N/A;

        }

        if (Jumlah < 0) Jumlah = 0;
        if (Jumlah > 99) Jumlah = 99;

        var txthasil = document.getElementById("hasil");
        txthasil.value = Math.floor(Jumlah).toString();
        document.getElementById("hasil").innerHTML=txthasil.value+"%";

        }

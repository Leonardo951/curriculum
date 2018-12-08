const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

export const cpfMaskInput = (cpf, cpfCurrent) => {
    cpf = cpf.split('');
    if(cpf.length < 15){
        cpf = cpf.filter((tool, i) => {
            return isNumber(tool)
        });
        if(cpf.length >= 1 && !isNumber(cpf[0])) return cpfCurrent;
        if(cpf.length >= 2 && !isNumber(cpf[1]))return cpfCurrent;
        if(cpf.length >= 3 && !isNumber(cpf[2]))return cpfCurrent;
        if(cpf.length >= 4 && cpf[3] !== '.') cpf.splice(3, 0, '.');
        if(cpf.length >= 5 && !isNumber(cpf[4])) return cpfCurrent;
        if(cpf.length >= 6 && !isNumber(cpf[5])) return cpfCurrent;
        if(cpf.length >= 7 && !isNumber(cpf[6])) return cpfCurrent;
        if(cpf.length >= 8 && cpf[7] !== '.') cpf.splice(7,0,'.');
        if(cpf.length >= 9 && !isNumber(cpf[8])) return cpfCurrent;
        if(cpf.length >= 10 && !isNumber(cpf[9])) return cpfCurrent;
        if(cpf.length >= 11 && !isNumber(cpf[10])) return cpfCurrent;
        if(cpf.length >= 12 && cpf[11] !== '-') cpf.splice(11,0,'-');
        if(cpf.length >= 13 && !isNumber(cpf[12])) return cpfCurrent;
        if(cpf.length >= 14 && !isNumber(cpf[13])) return cpfCurrent;
        if(cpf.length === 3 && cpfCurrent.length < cpf.length) cpf.splice(3, 0, '.');
        if(cpf.length === 7 && cpfCurrent.length < cpf.length) cpf.splice(7,0,'.');
        if(cpf.length === 11 && cpfCurrent.length < cpf.length) cpf.splice(11,0,'-');
        return cpf.join('')
    }else{
        return cpfCurrent
    }
};

export const cpfValid = strCPF => {
    if(strCPF.length > 0){
        let Soma;
        let Resto;
        Soma = 0;
        strCPF = strCPF.replace(".", "").replace(".", "").replace("-", "");
        if (strCPF === "00000000000" ||
            strCPF === "11111111111" ||
            strCPF === "22222222222" ||
            strCPF === "33333333333" ||
            strCPF === "44444444444" ||
            strCPF === "55555555555" ||
            strCPF === "66666666666" ||
            strCPF === "77777777777" ||
            strCPF === "88888888888" ||
            strCPF === "99999999999"){
            return false
        }else if(strCPF.length > 11) {
            return false
        }

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10)) ){
            return false
        }

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if((Resto === 10) || (Resto === 11))  Resto = 0;
        if(Resto !== parseInt(strCPF.substring(10, 11) ) ) {
            return false
        }else{
            return true
        }
    }else{
        return true
    }
};

export const mailValid = strMail => {
    let usuario = strMail.substring(0, strMail.indexOf("@"));
    let dominio = strMail.substring(strMail.indexOf("@")+ 1, strMail.length);
    if((usuario.length >=1 && dominio.length >=3 && usuario.search("@") === -1 &&
        dominio.search("@") === -1 && usuario.search(" ") === -1 && dominio.search(" ") === -1 &&
        dominio.search(".") !== -1 && dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1) || strMail === '')
    {
        return true;
    }else{
        return false;
    }
};
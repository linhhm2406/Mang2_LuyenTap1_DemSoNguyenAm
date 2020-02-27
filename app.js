let str = prompt('Nhap vao chuoi so');
let count=0;
for (let i = 0; i < str.length; i++) {
    if (str[i]=="-"){
        count++;
    }
}
alert('So luong so nguyen am la '+count);
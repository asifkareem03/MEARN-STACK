for(let i=1;i<=6;i++)
{
    var space=''
    for(let k=6;k>i;k--)
    {
        space=space+' '
    }
    var star=''
    for(let j=1;j<=i;j++)
    {
        star=star+'* ';
    }
    console.log(space+star);
}
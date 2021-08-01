for(let i=1;i<=6;i++)
{
    var space='';
    for(let k=6;k>i;k--)
    {
        space=space+' ';
    }
    var star='';
    var res='';
    if(i==1){
        star=star+'*';
    }
    else if(i!=6)
    {
        star='*';
        sp='';
        for(let k=1;k<=(i*2)-3;k++)
        {
            sp=sp+' ';
        }
        star=star+sp+star;
    }
    else
    {
        for(let j=1;j<=i;j++)
        {
            star=star+'* ';
        }
    }
    res=space+star;
    console.log(res);
}
#include<stdio.h>
int main(){
    int n,sum=0,i;
    printf("enter any number");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            sum=sum+i;
        }
    }

if(sum==n)

    printf("number is perfect");
else
{
    printf("number is not perfect");
}
}




let q = 0
let a = "Bataa"

for (i = 5; i > 0; i--)
{
    q = prompt(`What is Bataa's name?, You\'ve ${i} try`)

    if (a == q)
    {
        alert("Accepted")
        break
    }
}

if (i == 0)
{
    alert("Blocked")
}
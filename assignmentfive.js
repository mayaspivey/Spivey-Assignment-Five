function MenuChoice()
{
   if (document.getElementById("menu").value=="Section One: Display Customer List")
   {
     document.getElementById("sectionone").style.visibility="visible";
     document.getElementById("sectiontwo").style.visibility="hidden";
     document.getElementById("sectionthree").style.visibility="hidden";
   }
   else if (document.getElementById("menu").value=="Section Two: Display Order History") 
   {
      document.getElementById("sectionone").style.visibility="hidden";
     document.getElementById("sectiontwo").style.visibility="visible";
     document.getElementById("sectionthree").style.visibility="hidden";
   }
   else if (document.getElementById("menu").value=="Section Three: Display List of Orders")
   {
    document.getElementById("sectionone").style.visibility="hidden";
     document.getElementById("sectiontwo").style.visibility="hidden";
     document.getElementById("sectionthree").style.visibility="visible";
   }
   else
   {
      document.getElementById("sectionone").style.visibility="hidden";
     document.getElementById("sectiontwo").style.visibility="hidden";
     document.getElementById("sectionthree").style.visibility="hidden";
   }
}



function GetAllCustomers()
{
 var ajaxreq= new XMLHttpRequest(); //create ajax request
 
 var url= "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

 
 ajaxreq.onreadystatechange=function()
 {
    if (ajaxreq.readyState==4&&ajaxreq.status==200)
    {
      var output=JSON.parse(ajaxreq.responseText);
      GenerateOutput(output);
    }
 }
 ajaxreq.open("GET",url,true);
 ajaxreq.send();
 }
 
 function GenerateOutput(result) {
   var count=0;
   var displaytext="<table><tr><th>Customer Id</th><th>Customer Name </th><th> Customer City</th></tr>";
   
   for (count=0; count<result.GetAllCustomersResult.length;count++)
   {
    displaytext+="<tr><td>" +result.GetAllCustomersResult[count].CustomerID +"</td><td>"
    +result.GetAllCustomersResult[count].CompanyName + "</td><td>"+result.GetAllCustomersResult[count].City +"</td></tr>";
   }
   document.getElementById("sectiononedisplay").innerHTML=displaytext;
   result+="</table>";
 }
 
 function OrderHistory()
 {
   var ajaxreqsectwo= new XMLHttpRequest();
   var urltwo = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
   urltwo+=document.getElementById("customerid").value;
   
   ajaxreqsectwo.onreadystatechange=function()
   {
      if (ajaxreqsectwo.readyState==4 && ajaxreqsectwo.responseText==200)
      {
         var outputtwo=JSON.parse(ajaxreqsectwo.responseText);
         GenerateOutputtwo(outputtwo);
      }
   }
   
   ajaxreqsectwo.open("GET",urltwo,true);
   ajaxreqsectwo.send();
 }
   function GenerateOutputtwo(result)
   {
   var counttwo=0;
   var displaytwo="";
   
   for (counttwo=0; counttwo<result.ProductName.length;counttwo++)
   {
 displaytwo +=result[counttwo].ProductName; 
   }
 document.getElementById("sectiontwodisplay").innerHTML =displaytwo
 }
 
 function GetAllOrders()
 {
   var ajaxreqthree= new XMLHttpRequest();
   var urlthree ="http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
   urlthree+= document.getElementById("customeridthree").value;
   
   ajaxreqthree.onreadystatechange=function()
   {
      if (ajaxreqthree.readyState==4&&ajaxreqthree.status==200)
      {
        var outputthree =JSON.parse(ajaxreqthree.responseText);
        GenerateOutput(outputthree);
      }
   }
   ajaxreqthree.open("GET",urlthree,true);
   ajaxreqthree.send();
   
 }
{
 
   var countthree=0;
   var displaythree="";
   for (countthree=0; countthree<result.GetOrdersForCustomerResult.length;countthree++)
   {
      displaythree+=result.GetOrdersForCustomerResult[count].OrderDate;
   }
   document.getElementById("sectionthreedisplay").innerHTML=displaythree;
 }
 
 
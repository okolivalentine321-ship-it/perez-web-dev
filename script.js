const WHATSAPP_NUMBER="2349164682232";
const dateInput=document.getElementById("date");
const today=new Date();
dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
document.getElementById("bookingForm").addEventListener("submit",function(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim(),email=document.getElementById("email").value.trim(),type=document.getElementById("websiteType").value,date=document.getElementById("date").value,time=document.getElementById("time").value,details=document.getElementById("details").value.trim();
 if(!name||!phone||!type||!date||!time){alert("Please complete all required fields.");return;}
 const prettyDate=new Date(date+"T12:00:00").toLocaleDateString("en-NG",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
 const message=`Hello PEREZ WEB DEVELOPMENT! 👋

I'd like to book a website consultation.

👤 Name: ${name}
📱 WhatsApp: ${phone}
📧 Email: ${email||"Not provided"}

🌐 Website type: ${type}
📅 Date: ${prettyDate}
⏰ Time: ${time}

📝 Project details:
${details||"No additional details provided."}

Please confirm my appointment.`;
 window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank");
});
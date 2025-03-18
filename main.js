//mybirthdaycal

const myBirthday_day = new Date("1998/03/18");
const dayOfmybirth = myBirthday_day.getDate();
const monthOfmybirth = myBirthday_day.getMonth() + 1;
const yearOfmybirth = myBirthday_day.getFullYear();

//timecurrentcal

const currentDate = new Date();
const currentyear = currentDate.getFullYear();
const currentmonth = currentDate.getMonth() + 1; //.toLocaleString("en-US", { month: "long" });
const currentday = currentDate.getDate();

//connecttagHTML
const tagtimecountdown = document.getElementById("timecountdown");
const tagblass = document.getElementById("bless");

//arr bless

const birthdayWishes = [
  "สุขสันต์วันเกิด! ขอให้ปีนี้เป็นปีแห่งโชคลาภ \nเงินทองไหลมาเทมา ใช้เท่าไหร่ก็ไม่หมด \nลงทุนอะไรก็ได้กำไร รวยวันรวยคืน!",

  "ขอให้สุขภาพแข็งแรง ทั้งกายและใจ \nไม่มีโรคภัยเบียดเบียน สดใสแข็งแรงทุกวัน \nมีพลังลุยทุกเรื่องที่ต้องการ!",

  "ขอให้เจอรักดี ๆ ที่ทำให้หัวใจอบอุ่น \nหรือถ้ามีแล้วก็ขอให้รักกันหวานชื่นตลอดไป \nเติมเต็มความสุขในทุก ๆ วัน!",

  "ขอให้การงานก้าวหน้า ได้เลื่อนขั้นไว ๆ \nงานราบรื่น ไม่มีอุปสรรค เจ้านายรัก เพื่อนร่วมงานดี \nทำอะไรก็สำเร็จตามเป้าหมาย!",

  "ขอให้ปีนี้เป็นปีทองของคุณ \nเงินทองไหลมาเทมาแบบไม่ขาดสาย \nมีเงินใช้ มีเงินเก็บ มีเงินเที่ยวแบบจุใจ!",

  "สุขสันต์วันเกิด! ขอให้ร่างกายแข็งแรง \nไม่มีโรค ไม่มีภัย อายุยืนยาว \nทำอะไรก็มีพลัง เต็มไปด้วยความสดชื่น!",

  "ขอให้มีคนดี ๆ เข้ามาในชีวิต \nได้รับความรัก ความเข้าใจ \nและมีแต่ความสุขในทุก ๆ วัน!",

  "ขอให้ธุรกิจเติบโต การงานมั่นคง \nได้เจอแต่โอกาสดี ๆ ให้ชีวิตพุ่งไปข้างหน้า \nมีรายได้เพิ่มขึ้นอย่างมหาศาล!",

  "ขอให้โชคลาภเข้าหา ได้เงินก้อนโตแบบไม่คาดฝัน \nถูกหวยบ้าง ได้โบนัสบ้าง \nเฮง ๆ ปัง ๆ ตลอดทั้งปี!",

  "ขอให้ทุกวันของคุณเต็มไปด้วยรอยยิ้ม \nมีคนรัก มีคนแคร์ ได้เจอแต่สิ่งดี ๆ \nและมีความสุขในทุกช่วงเวลาของชีวิต!",
];

//fn check time to birthday
const nextTimetobirthday = () => {
  let nextMybirthday = new Date(currentyear, monthOfmybirth, dayOfmybirth);
  if (nextMybirthday < currentDate) {
    nextMybirthday.setFullYear(currentyear + 1);
  }
  return nextMybirthday;
};

//fn animation HBD

const HBD = () => {
  tagblass.classList.toggle("hidden");
  tagtimecountdown.classList.add("hidden");

  let numRandom = Math.floor(Math.random() * 10 + 1);

  console.log(numRandom);
  tagblass.innerHTML = birthdayWishes[numRandom];
};

//fn Time countdown
const countdown = () => {
  const timeDiff = nextTimetobirthday() - new Date();

  console.log(timeDiff);

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  //inserttotagHTML
  tagtimecountdown.innerHTML = `${days} Day ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

  if (dayOfmybirth == currentday && monthOfmybirth == currentmonth) {
    HBD();
  } else {
    //update every 1 sec
    setTimeout(countdown, 1000);
    console.log(dayOfmybirth, currentday, monthOfmybirth, currentmonth);
  }
};

//run after loadcontent
document.addEventListener("DOMContentLoaded", countdown());

function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oza44z0Xr8":
        Script1();
        break;
      case "5Z5Tw7UZc85":
        Script2();
        break;
      case "6XlV9KSV2Bt":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();		
yesarray = []
noarray = []
var s1 = player.GetVar("StressorA");
var s2 = player.GetVar("StressorB");
var s3 = player.GetVar("StressorC");
var s4 = player.GetVar("StressorD");
var s5 = player.GetVar("StressorE");
var s6 = player.GetVar("StressorF");
var s7 = player.GetVar("StressorG");
var s8 = player.GetVar("StressorH");
var s9 = player.GetVar("StressorI");
var s10 = player.GetVar("StressorJ");
var s11 = player.GetVar("StressorK");
var s12 = player.GetVar("StressorL");
var s13 = player.GetVar("StressorM");
var s14 = player.GetVar("StressorN");
var s15 = player.GetVar("StressorO");
var s16 = player.GetVar("StressorP");

var s1_YN = player.GetVar("StressorA_YN");
var s2_YN = player.GetVar("StressorB_YN");
var s3_YN = player.GetVar("StressorC_YN");
var s4_YN = player.GetVar("StressorD_YN");
var s5_YN = player.GetVar("StressorE_YN");
var s6_YN = player.GetVar("StressorF_YN");
var s7_YN = player.GetVar("StressorG_YN");
var s8_YN = player.GetVar("StressorH_YN");
var s9_YN = player.GetVar("StressorI_YN");
var s10_YN = player.GetVar("StressorJ_YN");
var s11_YN = player.GetVar("StressorK_YN");
var s12_YN = player.GetVar("StressorL_YN");
var s13_YN = player.GetVar("StressorM_YN");
var s14_YN = player.GetVar("StressorN_YN");
var s15_YN = player.GetVar("StressorO_YN");
var s16_YN = player.GetVar("StressorP_YN");	
	
var ynsavedstrategies = [s1_YN,s2_YN,s3_YN,s4_YN,s5_YN,s6_YN,s7_YN,s8_YN,s9_YN,s10_YN,s11_YN,s12_YN,s13_YN,s14_YN,s15_YN,s16_YN];	
var savedstrategies = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16];	

for (var i = 0; i < ynsavedstrategies.length; ++i) {    
	if (ynsavedstrategies[i] =="Y") {
	yesarray.push(savedstrategies[i])
	}
	if (ynsavedstrategies[i] =="N") {
	if (savedstrategies[i] !="") {
	noarray.push(savedstrategies[i])
	}
	}
}

player.SetVar("YesStressorsLength", yesarray.length);	
player.SetVar("NoStressorsLength", noarray.length);	
	
var blank = "";
	
player.SetVar("YesStressor1", blank);
player.SetVar("YesStressor2", blank);
player.SetVar("YesStressor3", blank);
player.SetVar("YesStressor4", blank);
player.SetVar("YesStressor5", blank);
player.SetVar("YesStressor6", blank);
player.SetVar("YesStressor7", blank);
player.SetVar("YesStressor8", blank);
player.SetVar("YesStressor9", blank);
player.SetVar("YesStressor10", blank);
player.SetVar("YesStressor11", blank);
player.SetVar("YesStressor12", blank);
player.SetVar("YesStressor13", blank);
player.SetVar("YesStressor14", blank);
player.SetVar("YesStressor15", blank);
player.SetVar("YesStressor16", blank);
	
if (yesarray.length>0)
	{
		player.SetVar("YesStressor1", yesarray[0]);
	}
if (yesarray.length>1)
	{
		player.SetVar("YesStressor2", yesarray[1]);
	}
if (yesarray.length>2)
	{
		player.SetVar("YesStressor3", yesarray[2]);
	}
if (yesarray.length>3)
	{
		player.SetVar("YesStressor4", yesarray[3]);
	}
if (yesarray.length>4)
	{
		player.SetVar("YesStressor5", yesarray[4]);
	}
if (yesarray.length>5)
	{
		player.SetVar("YesStressor6", yesarray[5]);
	}
if (yesarray.length>6)
	{
		player.SetVar("YesStressor7", yesarray[6]);
	}
if (yesarray.length>7)
	{
		player.SetVar("YesStressor8", yesarray[7]);
	}
if (yesarray.length>8)
	{
		player.SetVar("YesStressor9", yesarray[8]);
	}
if (yesarray.length>9)
	{
		player.SetVar("YesStressor10", yesarray[9]);
	}
if (yesarray.length>10)
	{
		player.SetVar("YesStressor11", yesarray[10]);
	}
if (yesarray.length>11)
	{
		player.SetVar("YesStressor12", yesarray[11]);
	}
if (yesarray.length>12)
	{
		player.SetVar("YesStressor13", yesarray[12]);
	}
if (yesarray.length>13)
	{
		player.SetVar("YesStressor14", yesarray[13]);
	}
if (yesarray.length>14)
	{
		player.SetVar("YesStressor15", yesarray[14]);
	}
if (yesarray.length>15)
	{
		player.SetVar("YesStressor16", yesarray[15]);
	}

player.SetVar("NoStressor1", blank);
player.SetVar("NoStressor2", blank);
player.SetVar("NoStressor3", blank);
player.SetVar("NoStressor4", blank);
player.SetVar("NoStressor5", blank);
player.SetVar("NoStressor6", blank);
player.SetVar("NoStressor7", blank);
player.SetVar("NoStressor8", blank);
player.SetVar("NoStressor9", blank);
player.SetVar("NoStressor10", blank);
player.SetVar("NoStressor11", blank);
player.SetVar("NoStressor12", blank);
player.SetVar("NoStressor13", blank);
player.SetVar("NoStressor14", blank);
player.SetVar("NoStressor15", blank);
player.SetVar("NoStressor16", blank);
	
if (noarray.length>0)
	{
		player.SetVar("NoStressor1", noarray[0]);
	}
if (noarray.length>1)
	{
		player.SetVar("NoStressor2", noarray[1]);
	}
if (noarray.length>2)
	{
		player.SetVar("NoStressor3", noarray[2]);
	}
if (noarray.length>3)
	{
		player.SetVar("NoStressor4", noarray[3]);
	}
if (noarray.length>4)
	{
		player.SetVar("NoStressor5", noarray[4]);
	}
if (noarray.length>5)
	{
		player.SetVar("NoStressor6", noarray[5]);
	}
if (noarray.length>6)
	{
		player.SetVar("NoStressor7", noarray[6]);
	}
if (noarray.length>7)
	{
		player.SetVar("NoStressor8", noarray[7]);
	}
if (noarray.length>8)
	{
		player.SetVar("NoStressor9", noarray[8]);
	}
if (noarray.length>9)
	{
		player.SetVar("NoStressor10", noarray[9]);
	}
if (noarray.length>10)
	{
		player.SetVar("NoStressor11", noarray[10]);
	}
if (noarray.length>11)
	{
		player.SetVar("NoStressor12", noarray[11]);
	}
if (noarray.length>12)
	{
		player.SetVar("NoStressor13", noarray[12]);
	}
if (noarray.length>13)
	{
		player.SetVar("NoStressor14", noarray[13]);
	}
if (noarray.length>14)
	{
		player.SetVar("NoStressor15", noarray[14]);
	}
if (noarray.length>15)
	{
		player.SetVar("NoStressor16", noarray[15]);
	}
}

function Script2()
{
  var player = GetPlayer();	
	
Strategyarray = []

var s1 = player.GetVar("StrategyA");
var s2 = player.GetVar("StrategyB");
var s3 = player.GetVar("StrategyC");
var s4 = player.GetVar("StrategyD");
var s5 = player.GetVar("StrategyE");
var s6 = player.GetVar("StrategyF");
var s7 = player.GetVar("StrategyG");
var s8 = player.GetVar("StrategyH");
var s9 = player.GetVar("StrategyI");
var s10 = player.GetVar("StrategyJ");

var savedstrategies = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];	

for (var i = 0; i < savedstrategies.length; ++i) {    
	if (savedstrategies[i] !="") {
	Strategyarray.push(savedstrategies[i])
	}
}
			
console.log(Strategyarray)	
	
player.SetVar("savedStrategy1", Strategyarray[0]);	
player.SetVar("savedStrategy2", Strategyarray[1]);	
player.SetVar("savedStrategy3", Strategyarray[2]);	
player.SetVar("savedStrategy4", Strategyarray[3]);	
}

function Script3()
{
  var player = GetPlayer();	
	
ImpactStrategyarray = []

var s1 = player.GetVar("ImpactStrategyA");
var s2 = player.GetVar("ImpactStrategyB");
var s3 = player.GetVar("ImpactStrategyC");
var s4 = player.GetVar("ImpactStrategyD");
var s5 = player.GetVar("ImpactStrategyE");
var s6 = player.GetVar("ImpactStrategyF");
var s7 = player.GetVar("ImpactStrategyG");
var s8 = player.GetVar("ImpactStrategyH");
var s9 = player.GetVar("ImpactStrategyI");
var s10 = player.GetVar("ImpactStrategyJ");
var s11 = player.GetVar("ImpactStrategyK");
var s12 = player.GetVar("ImpactStrategyL");

var savedimpactstrategies = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12];	

for (var i = 0; i < savedimpactstrategies.length; ++i) {    
	if (savedimpactstrategies[i] !="") {
	ImpactStrategyarray.push(savedimpactstrategies[i])
	}
}
			
console.log(ImpactStrategyarray)
	
player.SetVar("savedImpactStrategy1", ImpactStrategyarray[0]);	
player.SetVar("savedImpactStrategy2", ImpactStrategyarray[1]);	
player.SetVar("savedImpactStrategy3", ImpactStrategyarray[2]);	
player.SetVar("savedImpactStrategy4", ImpactStrategyarray[3]);
player.SetVar("savedImpactStrategy5", ImpactStrategyarray[4]);
}


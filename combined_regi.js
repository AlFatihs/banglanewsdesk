var isBijoy = true;
var isUniJoy = false;
var isPhonetic = false;
var isEnglish = false;

function makeBanglaInput(tbid)
{
	myTextAreaID = tbid;
	changeLayout('b');
}
function changeLayout(op)
{
	if(op == 'b')
	{
		isUniJoy = false;
		isPhonetic = false;
		isEnglish = false;
		isBijoy = true;
		makeBijoyKeybdEditor("txtarea");
	}
	else if(op == 'u')
	{
		isUniJoy = true;
		isPhonetic = false;
		isEnglish = false;
		isBijoy = false;
		makeUnijoyEditor("txtarea");
	}

	else if(op == 'p')
	{
		isUniJoy = false;
		isPhonetic = true;
		isEnglish = false;
		isBijoy = false;
		makePhoneticEditor("txtarea");
		}
	else if(op == 'e')
	{
		isUniJoy = false;
		isPhonetic = false;
		isEnglish = true;
		isBijoy = false;
		makeVirtualEditor("txtarea");
	}
}

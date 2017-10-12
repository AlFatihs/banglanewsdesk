function Price(){
        if (document.selection)
        {
                field.focus();
                sel = document.selection.createRange();
                sel.text = text;
                sel.collapse(true);
                sel.select();
        }

        else if (field.selectionStart || field.selectionStart == '0')
        {

               
                var startPos = field.selectionStart;
                var endPos = field.selectionEnd;
                var scrollTop = field.scrollTop;
                startPos = (startPos == -1 ? field.value.length : startPos );
                field.value = field.value.substring(0, startPos)
                        + text
                        + field.value.substring(endPos, field.value.length);
                field.focus();
                field.selectionStart = startPos + text.length;
                field.selectionEnd = startPos + text.length;
                field.scrollTop = scrollTop;
        }
        else
        {
                var scrollTop = field.scrollTop;
                field.value += value;
                field.focus();
                field.scrollTop = scrollTop;
        }

};
 

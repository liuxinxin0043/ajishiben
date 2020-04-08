var $editor = (function() {
    var $DOM = $(''
        + '<div class="notepad-editor">'
          + '<textarea spellcheck="false"></textarea>'
        + '</div>');
  
    var $textArea = $DOM.find('textarea');
  
    function resize(isBig) {
      if(isBig) {
        $DOM.css({bottom: '21px'});
      } else {
        $DOM.css({bottom: '0'});
      }
    }
    function setFont(e) {
      $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
  
      if(e.style === '斜体') {
        $textArea.css({'font-style': 'italic'});
        return;
      }
  
      if(e.style === '粗体') {
        $textArea.css({'font-weight': 'bold'});
        return;
      }
  
      if(e.style === '粗偏斜体') {
        $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
    function show() {
      $('body').append($DOM);
      $textArea.trigger('focus');
    }
  
    return {show: show,
            resize: resize,
            setFont:setFont
      };
  }());
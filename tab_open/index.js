//자주하는 질문 어코디언 메뉴
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.txt_thumb .txt_title');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle(200);
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.txt_review').not($next).slideUp(200).parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.review_wrap'), false);
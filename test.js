/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 combobox/combobox-xtpl
 combobox/render
 combobox/control
 combobox/cursor
 combobox/multi-value-combobox
 combobox/filter-select
 combobox/local-data-source
 combobox/remote-data-source
 combobox
*/

KISSY.add("combobox/combobox-xtpl", [], function(S, require, exports, module) {
	return function(scope, S, undefined) {
		var buffer = "",
			config = this.config,
			engine = this,
			moduleWrap, utils = config.utils;
		if (typeof module !== "undefined" && module.kissy) {
			moduleWrap = module
		}
		var runBlockCommandUtil = utils.runBlockCommand,
			renderOutputUtil = utils.renderOutput,
			getPropertyUtil = utils.getProperty,
			runInlineCommandUtil = utils.runInlineCommand,
			getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
		buffer += '<div id="ks-combobox-invalid-el-';
		var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 1);
		buffer += renderOutputUtil(id0, true);
		buffer += '"\n     class="';
		var config2 = {};
		var params3 = [];
		params3.push("invalid-el");
		config2.params = params3;
		var id1 = runInlineCommandUtil(engine, scope, config2, "getBaseCssClasses", 2);
		buffer += renderOutputUtil(id1, true);
		buffer += '">\n    <div class="';
		var config5 = {};
		var params6 = [];
		params6.push("invalid-inner");
		config5.params = params6;
		var id4 = runInlineCommandUtil(engine, scope, config5, "getBaseCssClasses", 3);
		buffer += renderOutputUtil(id4, true);
		buffer += '"></div>\n</div>\n\n';
		var config7 = {};
		var params8 = [];
		var id9 = getPropertyUtil(engine, scope, "hasTrigger", 0, 6);
		params8.push(id9);
		config7.params = params8;
		config7.fn = function(scope) {
			var buffer = "";
			buffer += '\n<div id="ks-combobox-trigger-';
			var id10 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 7);
			buffer += renderOutputUtil(id10, true);
			buffer += '"\n     class="';
			var config12 = {};
			var params13 = [];
			params13.push("trigger");
			config12.params = params13;
			var id11 = runInlineCommandUtil(engine, scope, config12, "getBaseCssClasses", 8);
			buffer += renderOutputUtil(id11, true);
			buffer += '">\n    <div class="';
			var config15 = {};
			var params16 = [];
			params16.push("trigger-inner");
			config15.params = params16;
			var id14 = runInlineCommandUtil(engine, scope, config15, "getBaseCssClasses", 9);
			buffer += renderOutputUtil(id14, true);
			buffer += '">&#x25BC;</div>\n</div>\n';
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config7, "if", 6);
		buffer += '\n\n<div class="';
		var config18 = {};
		var params19 = [];
		params19.push("input-wrap");
		config18.params = params19;
		var id17 = runInlineCommandUtil(engine, scope, config18, "getBaseCssClasses", 13);
		buffer += renderOutputUtil(id17, true);
		buffer += '">\n\n    <input id="ks-combobox-input-';
		var id20 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 15);
		buffer += renderOutputUtil(id20, true);
		buffer +=
			'"\n           aria-haspopup="true"\n           aria-autocomplete="list"\n           aria-haspopup="true"\n           role="autocomplete"\n           aria-expanded="false"\n\n    ';
		var config21 = {};
		var params22 = [];
		var id23 = getPropertyUtil(engine, scope, "disabled", 0, 22);
		params22.push(id23);
		config21.params = params22;
		config21.fn = function(scope) {
			var buffer = "";
			buffer += "\n    disabled\n    ";
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config21, "if", 22);
		buffer += '\n\n    autocomplete="off"\n    class="';
		var config25 = {};
		var params26 = [];
		params26.push("input");
		config25.params = params26;
		var id24 = runInlineCommandUtil(engine, scope, config25, "getBaseCssClasses", 27);
		buffer += renderOutputUtil(id24, true);
		buffer += '"\n\n    value="';
		var id27 = getPropertyOrRunCommandUtil(engine, scope, {}, "value", 0, 29);
		buffer += renderOutputUtil(id27, true);
		buffer += '"\n    />\n\n\n    <label id="ks-combobox-placeholder-';
		var id28 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 33);
		buffer += renderOutputUtil(id28, true);
		buffer += '"\n           for="ks-combobox-input-';
		var id29 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 34);
		buffer += renderOutputUtil(id29, true);
		buffer += "\"\n            style='display:";
		var config30 = {};
		var params31 = [];
		var id32 = getPropertyUtil(engine, scope, "value", 0, 35);
		params31.push(id32);
		config30.params = params31;
		config30.fn = function(scope) {
			var buffer = "";
			buffer += "none";
			return buffer
		};
		config30.inverse = function(scope) {
			var buffer = "";
			buffer += "block";
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config30, "if", 35);
		buffer += ";'\n    class=\"";
		var config34 = {};
		var params35 = [];
		params35.push("placeholder");
		config34.params = params35;
		var id33 = runInlineCommandUtil(engine, scope, config34, "getBaseCssClasses", 36);
		buffer += renderOutputUtil(id33, true);
		buffer += '">\n    ';
		var id36 = getPropertyOrRunCommandUtil(engine, scope, {}, "placeholder", 0, 37);
		buffer += renderOutputUtil(id36, true);
		buffer += "\n    </label>\n</div>\n";
		return buffer
	}
});
KISSY.add("combobox/render", ["component/control", "./combobox-xtpl"], function(S, require) {
	var Control = require("component/control");
	var ComboboxTpl = require("./combobox-xtpl");
	return Control.getDefaultRender().extend({
		beforeCreateDom: function(renderData, childrenElSelectors) {
			S.mix(childrenElSelectors, {
				input: "#ks-combobox-input-{id}",
				trigger: "#ks-combobox-trigger-{id}",
				invalidEl: "#ks-combobox-invalid-el-{id}",
				placeholderEl: "#ks-combobox-placeholder-{id}"
			})
		},
		getKeyEventTarget: function() {
			return this.control.get("input")
		},
		_onSetCollapsed: function(v) {
			this.control.get("input").attr("aria-expanded", !v)
		},
		_onSetDisabled: function(v, e) {
			this.callSuper(v, e);
			this.control.get("input").attr("disabled", v)
		}
	}, {
		ATTRS: {
			contentTpl: {
				value: ComboboxTpl
			}
		},
		HTML_PARSER: {
			value: function(el) {
				return el.one("." + this.getBaseCssClass("input")).val()
			},
			input: function(el) {
				return el.one("." + this.getBaseCssClass("input"))
			},
			trigger: function(el) {
				return el.one("." + this.getBaseCssClass("trigger"))
			},
			invalidEl: function(el) {
				return el.one("." + this.getBaseCssClass("invalid-el"))
			},
			placeholderEl: function(el) {
				return el.one("." + this.getBaseCssClass("placeholder"))
			}
		}
	})
});
KISSY.add("combobox/control", ["node", "component/control", "./render", "menu"], function(S, require) {
	var Node = require("node");
	var Control = require("component/control");
	var ComboBoxRender = require("./render");
	require("menu");
	var ComboBox, KeyCode = Node.KeyCode;
	ComboBox = Control.extend([], {
		initializer: function() {
			this.publish("afterRenderData", {
				bubbles: false
			})
		},
		_savedValue: null,
		normalizeData: function(data) {
			var self = this,
				contents, v, i, c;
			if (data && data.length) {
				data = data.slice(0, self.get("maxItemCount"));
				if (self.get("format")) {
					contents = self.get("format").call(self, self.getValueForAutocomplete(), data)
				} else {
					contents = []
				}
				for (i = 0; i < data.length; i++) {
					v = data[i];
					c = contents[i] = S.mix({
						content: v,
						textContent: v,
						value: v
					}, contents[i])
				}
				return contents
			}
			return contents
		},
		bindUI: function() {
			var self = this,
				input = self.get("input");
			input.on("valuechange", onValueChange, self);
			self.on("click", onMenuItemClick, self);
			self.get("menu").onRendered(function(menu) {
				onMenuAfterRenderUI(self, menu)
			})
		},
		destructor: function() {
			this.get("menu").destroy()
		},
		getValueForAutocomplete: function() {
			return this.get("value")
		},
		setValueFromAutocomplete: function(value, setCfg) {
			this.set("value", value, setCfg)
		},
		_onSetValue: function(v, e) {
			var self = this,
				value;
			if (e.causedByTimer) {
				value = self.getValueForAutocomplete();
				if (value === undefined) {
					self.set("collapsed", true);
					return
				}
				self._savedValue = value;
				self.sendRequest(value)
			} else {
				self.get("input").val(v)
			}
		},
		handleFocusInternal: function() {
			var self = this,
				placeholderEl;
			clearDismissTimer(self);
			if (self.get("invalidEl")) {
				setInvalid(self, false)
			}
			if (placeholderEl = self.get("placeholderEl")) {
				placeholderEl.hide()
			}
		},
		handleBlurInternal: function(e) {
			var self = this,
				placeholderEl = self.get("placeholderEl");
			self.callSuper(e);
			delayHide(self);
			if (self.get("invalidEl")) {
				self.validate(function(error, val) {
					if (error) {
						if (!self.get("focused") && val === self.get("value")) {
							setInvalid(self, error)
						}
					} else {
						setInvalid(self, false)
					}
				})
			}
			if (placeholderEl && !self.get("value")) {
				placeholderEl.show()
			}
		},
		handleMouseDownInternal: function(e) {
			var self = this,
				target, trigger;
			self.callSuper(e);
			target = e.target;
			trigger = self.get("trigger");
			if (trigger && (trigger[0] === target || trigger.contains(target))) {
				if (self.get("collapsed")) {
					self.focus();
					self.sendRequest("")
				} else {
					self.set("collapsed", true)
				}
				e.preventDefault()
			}
		},
		handleKeyDownInternal: function(e) {
			var self = this,
				updateInputOnDownUp, input, keyCode = e.keyCode,
				highlightedItem, handledByMenu, menu = self.get("menu");
			input = self.get("input");
			updateInputOnDownUp = self.get("updateInputOnDownUp");
			if (menu.get("visible")) {
				highlightedItem = menu.get("highlightedItem");
				if (updateInputOnDownUp && highlightedItem) {
					var menuChildren = menu.get("children");
					if (keyCode === KeyCode.DOWN && highlightedItem === getFirstEnabledItem(menuChildren.concat().reverse()) ||
						keyCode === KeyCode.UP && highlightedItem === getFirstEnabledItem(menuChildren)) {
						self.setValueFromAutocomplete(self._savedValue);
						highlightedItem.set("highlighted", false);
						return true
					}
				}
				handledByMenu = menu.handleKeyDownInternal(e);
				highlightedItem = menu.get("highlightedItem");
				if (keyCode === KeyCode.ESC) {
					self.set("collapsed", true);
					if (updateInputOnDownUp) {
						self.setValueFromAutocomplete(self._savedValue)
					}
					return true
				}
				if (updateInputOnDownUp && S.inArray(keyCode, [KeyCode.DOWN, KeyCode.UP])) {
					self.setValueFromAutocomplete(highlightedItem.get("textContent"))
				}
				if (keyCode === KeyCode.TAB && highlightedItem) {
					highlightedItem.handleClickInternal(e);
					if (self.get("multiple")) {
						return true
					}
				}
				return handledByMenu
			} else {
				if (keyCode === KeyCode.DOWN || keyCode === KeyCode.UP) {
					var v = self.getValueForAutocomplete();
					if (v !== undefined) {
						self.sendRequest(v);
						return true
					}
				}
			}
			return undefined
		},
		validate: function(callback) {
			var self = this,
				validator = self.get("validator"),
				val = self.getValueForAutocomplete();
			if (validator) {
				validator(val, function(error) {
					callback(error, val)
				})
			} else {
				callback(false, val)
			}
		},
		sendRequest: function(value) {
			var self = this,
				dataSource = self.get("dataSource");
			dataSource.fetchData(value, renderData, self)
		},
		_onSetCollapsed: function(v) {
			var self = this,
				el = self.$el,
				menu = self.get("menu");
			if (v) {
				menu.hide()
			} else {
				clearDismissTimer(self);
				if (!menu.get("visible")) {
					if (self.get("matchElWidth")) {
						menu.render();
						var menuEl = menu.get("el");
						var borderWidth = (parseInt(menuEl.css("borderLeftWidth")) || 0) + (parseInt(menuEl.css("borderRightWidth")) ||
							0);
						menu.set("width", el[0].offsetWidth - borderWidth)
					}
					menu.show()
				}
			}
		}
	}, {
		ATTRS: {
			input: {},
			value: {
				value: "",
				sync: 0,
				view: 1
			},
			trigger: {},
			placeholder: {
				view: 1
			},
			placeholderEl: {},
			validator: {},
			invalidEl: {},
			allowTextSelection: {
				value: true
			},
			hasTrigger: {
				value: true,
				view: 1
			},
			menu: {
				value: {},
				getter: function(v) {
					if (!v.isControl) {
						v.xclass = v.xclass || "popupmenu";
						v = this.createComponent(v);
						this.setInternal("menu", v)
					}
					return v
				},
				setter: function(m) {
					if (m.isControl) {
						m.setInternal("parent", this);
						var align = {
							node: this.$el,
							points: ["bl", "tl"],
							overflow: {
								adjustX: 1,
								adjustY: 1
							}
						};
						S.mix(m.get("align"), align, false)
					}
				}
			},
			collapsed: {
				view: 1,
				value: true
			},
			dataSource: {},
			maxItemCount: {
				value: 99999
			},
			matchElWidth: {
				value: true
			},
			format: {},
			updateInputOnDownUp: {
				value: true
			},
			autoHighlightFirst: {},
			highlightMatchItem: {
				value: true
			},
			xrender: {
				value: ComboBoxRender
			}
		},
		xclass: "combobox"
	});

	function getFirstEnabledItem(children) {
		for (var i = 0; i < children.length; i++) {
			if (!children[i].get("disabled")) {
				return children[i]
			}
		}
		return null
	}

	function onMenuFocusout() {
		var combobox = this;
		delayHide(combobox)
	}

	function onMenuFocusin() {
		var combobox = this;
		setTimeout(function() {
			clearDismissTimer(combobox)
		}, 0)
	}

	function onMenuMouseOver() {
		var combobox = this;
		combobox.focus();
		clearDismissTimer(combobox)
	}

	function onMenuMouseDown() {
		var combobox = this;
		combobox.setValueFromAutocomplete(combobox.getValueForAutocomplete(), {
			force: 1
		})
	}

	function onMenuAfterRenderUI(self, menu) {
		var contentEl;
		var input = self.get("input");
		var el = menu.get("el");
		contentEl = menu.get("contentEl");
		input.attr("aria-owns", el.attr("id"));
		el.on("focusout", onMenuFocusout, self);
		el.on("focusin", onMenuFocusin, self);
		contentEl.on("mouseover", onMenuMouseOver, self);
		contentEl.on("mousedown", onMenuMouseDown, self)
	}

	function onMenuItemClick(e) {
		var item = e.target,
			self = this,
			textContent;
		if (item.isMenuItem) {
			textContent = item.get("textContent");
			self.setValueFromAutocomplete(textContent);
			self._savedValue = textContent;
			self.set("collapsed", true)
		}
	}

	function setInvalid(self, error) {
		var $el = self.$el,
			cls = self.view.getBaseCssClasses("invalid"),
			invalidEl = self.get("invalidEl");
		if (error) {
			$el.addClass(cls);
			invalidEl.attr("title", error);
			invalidEl.show()
		} else {
			$el.removeClass(cls);
			invalidEl.hide()
		}
	}

	function delayHide(self) {
		if (self._focusoutDismissTimer) {
			return
		}
		self._focusoutDismissTimer = setTimeout(function() {
			if (self._focusoutDismissTimer) {
				self.set("collapsed", true)
			}
		}, 50)
	}

	function clearDismissTimer(self) {
		var t = self._focusoutDismissTimer;
		if (t) {
			clearTimeout(t);
			self._focusoutDismissTimer = null
		}
	}

	function onValueChange(e) {
		this.set("value", e.newVal, {
			data: {
				causedByTimer: 1
			}
		})
	}

	function renderData(data) {
		var self = this,
			v, children = [],
			val, matchVal, highlightedItem, i, menu = self.get("menu");
		data = self.normalizeData(data);
		menu.removeChildren(true);
		if (highlightedItem = menu.get("highlightedItem")) {
			highlightedItem.set("highlighted", false)
		}
		if (data && data.length) {
			for (i = 0; i < data.length; i++) {
				v = data[i];
				menu.addChild(v)
			}
			children = menu.get("children");
			val = self.getValueForAutocomplete();
			if (self.get("highlightMatchItem")) {
				for (i = 0; i < children.length; i++) {
					if (children[i].get("textContent") === val) {
						children[i].set("highlighted", true);
						matchVal = true;
						break
					}
				}
			}
			if (!matchVal && self.get("autoHighlightFirst")) {
				for (i = 0; i < children.length; i++) {
					if (!children[i].get("disabled")) {
						children[i].set("highlighted", true);
						break
					}
				}
			}
			self.set("collapsed", false);
			self.fire("afterRenderData")
		} else {
			self.set("collapsed", true)
		}
	}
	return ComboBox
});
KISSY.add("combobox/cursor", ["node"], function(S, require) {
	var Node = require("node");
	var $ = Node.all,
		FAKE_DIV_HTML = '<div style="' + "z-index:-9999;" + "overflow:hidden;" + "position: fixed;" + "left:-9999px;" +
		"top:-9999px;" + "opacity:0;" + "white-space:pre-wrap;" + "word-wrap:break-word;" + '"></div>',
		FAKE_DIV, MARKER = "<span>" + "x" + "</span>",
		STYLES = ["paddingLeft", "paddingTop", "paddingBottom", "paddingRight", "marginLeft", "marginTop", "marginBottom",
			"marginRight", "borderLeftStyle", "borderTopStyle", "borderBottomStyle", "borderRightStyle", "borderLeftWidth",
			"borderTopWidth", "borderBottomWidth", "borderRightWidth", "line-height", "outline", "height", "fontFamily",
			"fontSize", "fontWeight", "fontVariant", "fontStyle"
		],
		supportInputScrollLeft, findSupportInputScrollLeft;

	function getFakeDiv(elem) {
		var fake = FAKE_DIV;
		if (!fake) {
			fake = $(FAKE_DIV_HTML)
		}
		if (String(elem[0].type.toLowerCase()) === "textarea") {
			fake.css("width", elem.css("width"))
		} else {
			fake.css("width", 9999)
		}
		S.each(STYLES, function(s) {
			fake.css(s, elem.css(s))
		});
		if (!FAKE_DIV) {
			fake.insertBefore(elem[0].ownerDocument.body.firstChild)
		}
		FAKE_DIV = fake;
		return fake
	}
	findSupportInputScrollLeft = function() {
		var doc = document,
			input = $("<input>");
		input.css({
			width: 1,
			position: "absolute",
			left: -9999,
			top: -9999
		});
		input.val("123456789");
		input.appendTo(doc.body);
		input[0].focus();
		supportInputScrollLeft = input[0].scrollLeft > 0;
		input.remove();
		findSupportInputScrollLeft = S.noop
	};
	supportInputScrollLeft = false;
	return function(elem) {
		var $elem = $(elem);
		elem = $elem[0];
		var doc = elem.ownerDocument,
			$doc = $(doc),
			elemOffset, range, fake, selectionStart, offset, marker, elemScrollTop = elem.scrollTop,
			elemScrollLeft = elem.scrollLeft;
		if (doc.selection) {
			range = doc.selection.createRange();
			return {
				left: range.boundingLeft + elemScrollLeft + $doc.scrollLeft(),
				top: range.boundingTop + elemScrollTop + range.boundingHeight + $doc.scrollTop()
			}
		}
		elemOffset = $elem.offset();
		if (!supportInputScrollLeft && elem.type !== "textarea") {
			elemOffset.top += elem.offsetHeight;
			return elemOffset
		}
		fake = getFakeDiv($elem);
		selectionStart = elem.selectionStart;
		fake.html(S.escapeHtml(elem.value.substring(0, selectionStart - 1)) + MARKER);
		offset = elemOffset;
		fake.offset(offset);
		marker = fake.last();
		offset = marker.offset();
		offset.top += marker.height();
		if (selectionStart > 0) {
			offset.left += marker.width()
		}
		offset.top -= elemScrollTop;
		offset.left -= elemScrollLeft;
		return offset
	}
});
KISSY.add("combobox/multi-value-combobox", ["./cursor", "./control"], function(S, require) {
	var SUFFIX = "suffix",
		rWhitespace = /\s|\xa0/;
	var getCursor = require("./cursor");
	var ComboBox = require("./control");

	function strContainsChar(str, c) {
		return c && str.indexOf(c) !== -1
	}

	function beforeVisibleChange(e) {
		if (e.newVal && e.target === this.get("menu")) {
			this.alignWithCursor()
		}
	}
	return ComboBox.extend({
		syncUI: function() {
			var self = this,
				menu;
			if (self.get("alignWithCursor")) {
				menu = self.get("menu");
				menu.setInternal("align", null);
				menu.on("beforeVisibleChange", beforeVisibleChange, this)
			}
		},
		getValueForAutocomplete: function() {
			var self = this,
				inputDesc = getInputDesc(self),
				tokens = inputDesc.tokens,
				tokenIndex = inputDesc.tokenIndex,
				separator = self.get("separator"),
				separatorType = self.get("separatorType"),
				token = tokens[tokenIndex],
				l = token.length - 1;
			if (separatorType !== SUFFIX) {
				if (strContainsChar(separator, token.charAt(0))) {
					token = token.slice(1)
				} else {
					return undefined
				}
			} else {
				if (separatorType === SUFFIX && strContainsChar(separator, token.charAt(l))) {
					token = token.slice(0, l)
				}
			}
			return token
		},
		setValueFromAutocomplete: function(value, setCfg) {
			var self = this,
				input = self.get("input"),
				inputDesc = getInputDesc(self),
				tokens = inputDesc.tokens,
				tokenIndex = Math.max(0, inputDesc.tokenIndex),
				separator = self.get("separator"),
				cursorPosition, l, separatorType = self.get("separatorType"),
				nextToken = tokens[tokenIndex + 1] || "",
				token = tokens[tokenIndex];
			if (separatorType !== SUFFIX) {
				tokens[tokenIndex] = token.charAt(0) + value;
				if (value && !(nextToken && rWhitespace.test(nextToken.charAt(0)))) {
					tokens[tokenIndex] += " "
				}
			} else {
				tokens[tokenIndex] = value;
				l = token.length - 1;
				if (strContainsChar(separator, token.charAt(l))) {
					tokens[tokenIndex] += token.charAt(l)
				} else {
					if (separator.length === 1) {
						tokens[tokenIndex] += separator
					}
				}
			}
			cursorPosition = tokens.slice(0, tokenIndex + 1).join("").length;
			self.set("value", tokens.join(""), setCfg);
			input.prop("selectionStart", cursorPosition);
			input.prop("selectionEnd", cursorPosition)
		},
		alignWithCursor: function() {
			var self = this;
			var menu = self.get("menu"),
				cursorOffset, input = self.get("input");
			cursorOffset = getCursor(input);
			menu.move(cursorOffset.left, cursorOffset.top)
		}
	}, {
		ATTRS: {
			separator: {
				value: ",;"
			},
			separatorType: {
				value: SUFFIX
			},
			literal: {
				value: '"'
			},
			alignWithCursor: {}
		},
		xclass: "multi-value-combobox"
	});

	function getInputDesc(self) {
		var input = self.get("input"),
			inputVal = self.get("value"),
			tokens = [],
			cache = [],
			literal = self.get("literal"),
			separator = self.get("separator"),
			separatorType = self.get("separatorType"),
			inLiteral = false,
			allowWhitespaceAsStandaloneToken = separatorType !== SUFFIX,
			cursorPosition = input.prop("selectionStart"),
			i, c, tokenIndex = -1;
		for (i = 0; i < inputVal.length; i++) {
			c = inputVal.charAt(i);
			if (literal) {
				if (c === literal) {
					inLiteral = !inLiteral
				}
			}
			if (inLiteral) {
				cache.push(c);
				continue
			}
			if (i === cursorPosition) {
				tokenIndex = tokens.length
			}
			if (allowWhitespaceAsStandaloneToken && rWhitespace.test(c)) {
				if (cache.length) {
					tokens.push(cache.join(""))
				}
				cache = [];
				cache.push(c)
			} else {
				if (strContainsChar(separator, c)) {
					if (separatorType === SUFFIX) {
						cache.push(c);
						if (cache.length) {
							tokens.push(cache.join(""))
						}
						cache = []
					} else {
						if (cache.length) {
							tokens.push(cache.join(""))
						}
						cache = [];
						cache.push(c)
					}
				} else {
					cache.push(c)
				}
			}
		}
		if (cache.length) {
			tokens.push(cache.join(""))
		}
		if (!tokens.length) {
			tokens.push("")
		}
		if (tokenIndex === -1) {
			if (separatorType === SUFFIX && strContainsChar(separator, c)) {
				tokens.push("")
			}
			tokenIndex = tokens.length - 1
		}
		return {
			tokens: tokens,
			cursorPosition: cursorPosition,
			tokenIndex: tokenIndex
		}
	}
});
KISSY.add("combobox/filter-select", ["./control"], function(S, require, exports, module) {
	var Combobox = require("./control");

	function valInAutoCompleteList(inputVal, _saveData) {
		var valid = false;
		if (_saveData) {
			for (var i = 0; i < _saveData.length; i++) {
				if (_saveData[i].textContent === inputVal) {
					return _saveData[i]
				}
			}
		}
		return valid
	}
	module.exports = Combobox.extend({
		validate: function(callback) {
			var self = this;
			self.callSuper(function(error, val) {
				if (!error) {
					self.get("dataSource").fetchData(val, function(data) {
						var d = valInAutoCompleteList(val, self.normalizeData(data));
						callback(d ? "" : self.get("invalidMessage"), val, d)
					})
				} else {
					callback(error, val)
				}
			})
		}
	}, {
		ATTRS: {
			invalidMessage: {
				value: "invalid input"
			}
		}
	})
});
KISSY.add("combobox/local-data-source", ["attribute"], function(S, require) {
	var Attribute = require("attribute");
	return Attribute.extend({
		fetchData: function(inputVal, callback, context) {
			var parse = this.get("parse"),
				data = this.get("data");
			data = parse(inputVal, data);
			callback.call(context, data)
		}
	}, {
		ATTRS: {
			data: {
				value: []
			},
			parse: {
				value: parser
			}
		}
	});

	function parser(inputVal, data) {
		var ret = [],
			count = 0;
		if (!inputVal) {
			return data
		}
		S.each(data, function(d) {
			if (d.indexOf(inputVal) !== -1) {
				ret.push(d)
			}
			count++
		});
		return ret
	}
});
KISSY.add("combobox/remote-data-source", ["io", "attribute"], function(S, require) {
	var IO = require("io");
	var Attribute = require("attribute");
	return Attribute.extend({
		fetchData: function(inputVal, callback, context) {
			var self = this,
				v, paramName = self.get("paramName"),
				parse = self.get("parse"),
				cache = self.get("cache"),
				allowEmpty = self.get("allowEmpty");
			self.caches = self.caches || {};
			if (self.io) {
				self.io.abort();
				self.io = null
			}
			if (!inputVal && allowEmpty !== true) {
				return callback.call(context, [])
			}
			if (cache) {
				if (v = self.caches[inputVal]) {
					return callback.call(context, v)
				}
			}
			var xhrCfg = self.get("xhrCfg");
			xhrCfg.data = xhrCfg.data || {};
			xhrCfg.data[paramName] = inputVal;
			xhrCfg.success = function(data) {
				if (parse) {
					data = parse(inputVal, data)
				}
				self.setInternal("data", data);
				if (cache) {
					self.caches[inputVal] = data
				}
				callback.call(context, data)
			};
			self.io = IO(xhrCfg);
			return undefined
		}
	}, {
		ATTRS: {
			paramName: {
				value: "q"
			},
			allowEmpty: {},
			cache: {},
			parse: {},
			xhrCfg: {
				value: {}
			}
		}
	})
});
KISSY.add("combobox", ["combobox/control", "combobox/multi-value-combobox", "combobox/filter-select",
	"combobox/local-data-source", "combobox/remote-data-source"
], function(S, require) {
	var ComboBox = require("combobox/control");
	var MultiValueComboBox = require("combobox/multi-value-combobox");
	var FilterSelect = require("combobox/filter-select");
	var LocalDataSource = require("combobox/local-data-source");
	var RemoteDataSource = require("combobox/remote-data-source");
	ComboBox.LocalDataSource = LocalDataSource;
	ComboBox.RemoteDataSource = RemoteDataSource;
	ComboBox.FilterSelect = FilterSelect;
	ComboBox.MultiValueComboBox = MultiValueComboBox;
	return ComboBox
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: Aug 20 14:23
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/control/process
 component/control/render-xtpl
 component/control/render
 component/control
*/

KISSY.add("component/control/process", ["base", "promise"], function(S, require) {
	var Base = require("base");
	var Promise = require("promise");
	var Defer = Promise.Defer,
		__getHook = Base.prototype.__getHook,
		noop = S.noop;
	var ComponentProcess = Base.extend({
		bindInternal: noop,
		syncInternal: noop,
		initializer: function() {
			this._renderedDefer = new Defer
		},
		renderUI: noop,
		syncUI: noop,
		bindUI: noop,
		onRendered: function(fn) {
			return this._renderedDefer.promise.then(fn)
		},
		create: function() {
			var self = this;
			if (!self.get("created")) {
				self.fire("beforeCreateDom");
				self.createInternal();
				self.__callPluginsMethod("pluginCreateDom");
				self.fire("afterCreateDom");
				self.setInternal("created", true)
			}
			return self
		},
		createInternal: function() {
			this.createDom()
		},
		render: function() {
			var self = this;
			if (!self.get("rendered")) {
				self.create();
				self.fire("beforeRenderUI");
				self.renderUI();
				self.__callPluginsMethod("pluginRenderUI");
				self.fire("afterRenderUI");
				self.fire("beforeBindUI");
				ComponentProcess.superclass.bindInternal.call(self);
				self.bindUI();
				self.__callPluginsMethod("pluginBindUI");
				self.fire("afterBindUI");
				ComponentProcess.superclass.syncInternal.call(self);
				syncUIs(self);
				self.setInternal("rendered", true)
			}
			return self
		},
		sync: function() {
			syncUIs(this)
		},
		plug: function(plugin) {
			var self = this,
				p, plugins = self.get("plugins");
			self.callSuper(plugin);
			p = plugins[plugins.length - 1];
			if (self.get("rendered")) {
				if (p.pluginCreateDom) {
					p.pluginCreateDom(self)
				}
				if (p.pluginRenderUI) {
					p.pluginCreateDom(self)
				}
				if (p.pluginBindUI) {
					p.pluginBindUI(self)
				}
				if (p.pluginSyncUI) {
					p.pluginSyncUI(self)
				}
			} else {
				if (self.get("created")) {
					if (p.pluginCreateDom) {
						p.pluginCreateDom(self)
					}
				}
			}
			return self
		}
	}, {
		__hooks__: {
			createDom: __getHook("__createDom"),
			renderUI: __getHook("__renderUI"),
			bindUI: __getHook("__bindUI"),
			syncUI: __getHook("__syncUI")
		},
		name: "ComponentProcess",
		ATTRS: {
			rendered: {
				value: false,
				setter: function(v) {
					if (v) {
						this._renderedDefer.resolve(this)
					}
				}
			},
			created: {
				value: false
			}
		}
	});

	function syncUIs(self) {
		self.fire("beforeSyncUI");
		self.syncUI();
		self.__callPluginsMethod("pluginSyncUI");
		self.fire("afterSyncUI")
	}
	return ComponentProcess
});
KISSY.add("component/control/render-xtpl", [], function(S, require, exports, module) {
	return function(scope, S, undefined) {
		var buffer = "",
			config = this.config,
			engine = this,
			moduleWrap, utils = config.utils;
		if (typeof module !== "undefined" && module.kissy) {
			moduleWrap = module
		}
		var runBlockCommandUtil = utils.runBlockCommand,
			renderOutputUtil = utils.renderOutput,
			getPropertyUtil = utils.getProperty,
			runInlineCommandUtil = utils.runInlineCommand,
			getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
		buffer += '<div id="';
		var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 1);
		buffer += renderOutputUtil(id0, true);
		buffer += '"\n class="';
		var config2 = {};
		var params3 = [];
		params3.push("");
		config2.params = params3;
		var id1 = runInlineCommandUtil(engine, scope, config2, "getBaseCssClasses", 2);
		buffer += renderOutputUtil(id1, true);
		buffer += "\n";
		var config4 = {};
		var params5 = [];
		var id6 = getPropertyUtil(engine, scope, "elCls", 0, 3);
		params5.push(id6);
		config4.params = params5;
		config4.fn = function(scope) {
			var buffer = "";
			buffer += "\n ";
			var id7 = getPropertyOrRunCommandUtil(engine, scope, {}, ".", 0, 4);
			buffer += renderOutputUtil(id7, true);
			buffer += "  \n";
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config4, "each", 3);
		buffer += '\n"\n\n';
		var config8 = {};
		var params9 = [];
		var id10 = getPropertyUtil(engine, scope, "elAttrs", 0, 8);
		params9.push(id10);
		config8.params = params9;
		config8.fn = function(scope) {
			var buffer = "";
			buffer += " \n ";
			var id11 = getPropertyOrRunCommandUtil(engine, scope, {}, "xindex", 0, 9);
			buffer += renderOutputUtil(id11, true);
			buffer += '="';
			var id12 = getPropertyOrRunCommandUtil(engine, scope, {}, ".", 0, 9);
			buffer += renderOutputUtil(id12, true);
			buffer += '"\n';
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config8, "each", 8);
		buffer += '\n\nstyle="\n';
		var config13 = {};
		var params14 = [];
		var id15 = getPropertyUtil(engine, scope, "elStyle", 0, 13);
		params14.push(id15);
		config13.params = params14;
		config13.fn = function(scope) {
			var buffer = "";
			buffer += " \n ";
			var id16 = getPropertyOrRunCommandUtil(engine, scope, {}, "xindex", 0, 14);
			buffer += renderOutputUtil(id16, true);
			buffer += ":";
			var id17 = getPropertyOrRunCommandUtil(engine, scope, {}, ".", 0, 14);
			buffer += renderOutputUtil(id17, true);
			buffer += ";\n";
			return buffer
		};
		buffer += runBlockCommandUtil(engine, scope, config13, "each", 13);
		buffer += '\n">';
		return buffer
	}
});
KISSY.add("component/control/render", ["node", "xtemplate/runtime", "./process", "./render-xtpl", "component/manager"],
	function(S, require) {
		var Node = require("node");
		var XTemplateRuntime = require("xtemplate/runtime");
		var ComponentProcess = require("./process");
		var RenderTpl = require("./render-xtpl");
		var Manager = require("component/manager");
		var ON_SET = "_onSet",
			trim = S.trim,
			$ = Node.all,
			UA = S.UA,
			startTpl = RenderTpl,
			endTpl = "</div>",
			doc = S.Env.host.document,
			HTML_PARSER = "HTML_PARSER";

		function pxSetter(v) {
			if (typeof v === "number") {
				v += "px"
			}
			return v
		}

		function applyParser(srcNode, parser, control) {
			var view = this,
				p, v, ret;
			for (p in parser) {
				v = parser[p];
				if (typeof v === "function") {
					ret = v.call(view, srcNode);
					if (ret !== undefined) {
						control.setInternal(p, ret)
					}
				} else {
					if (typeof v === "string") {
						control.setInternal(p, srcNode.one(v))
					} else {
						if (S.isArray(v) && v[0]) {
							control.setInternal(p, srcNode.all(v[0]))
						}
					}
				}
			}
		}

		function normalExtras(extras) {
			if (!extras) {
				extras = [""]
			}
			if (typeof extras === "string") {
				extras = extras.split(/\s+/)
			}
			return extras
		}

		function prefixExtra(prefixCls, componentCls, extras) {
			var cls = "",
				i = 0,
				l = extras.length,
				e, prefix = prefixCls + componentCls;
			for (; i < l; i++) {
				e = extras[i];
				e = e ? "-" + e : e;
				cls += " " + prefix + e
			}
			return cls
		}

		function onSetAttrChange(e) {
			var self = this,
				method;
			if (e.target === self.control) {
				method = self[ON_SET + e.type.slice(5).slice(0, -6)];
				method.call(self, e.newVal, e)
			}
		}

		function getBaseCssClassesCmd() {
			return this.config.view.getBaseCssClasses(arguments[1].params[0])
		}

		function getBaseCssClassCmd() {
			return this.config.view.getBaseCssClass(arguments[1].params[0])
		}

		function findComponentCss(css, prefixCls) {
			var csses = css.split(/\s+/);
			var newCss = [];
			for (var i = 0, l = csses.length; i < l; i++) {
				var c = S.trim(csses[i]);
				if (c && S.startsWith(c, prefixCls)) {
					newCss.push(c.substring(prefixCls.length))
				}
			}
			return newCss.join(" ")
		}
		return ComponentProcess.extend({
			isRender: true,
			createInternal: function() {
				var self = this,
					srcNode = self.control.get("srcNode");
				if (srcNode) {
					self.decorateDom(srcNode)
				} else {
					self.callSuper()
				}
			},
			beforeCreateDom: function(renderData) {
				var self = this,
					control = self.control,
					width, height, visible, elAttrs = control.get("elAttrs"),
					cls = control.get("elCls"),
					disabled, attrs = control.getAttrs(),
					a, attr, elStyle = control.get("elStyle"),
					zIndex, elCls = control.get("elCls");
				for (a in attrs) {
					attr = attrs[a];
					if (attr.view) {
						renderData[a] = control.get(a)
					}
				}
				width = renderData.width;
				height = renderData.height;
				visible = renderData.visible;
				zIndex = renderData.zIndex;
				if (width) {
					elStyle.width = pxSetter(width)
				}
				if (height) {
					elStyle.height = pxSetter(height)
				}
				if (zIndex) {
					elStyle["z-index"] = zIndex
				}
				if (!visible) {
					elCls.push(self.getBaseCssClasses("hidden"))
				}
				if (disabled = control.get("disabled")) {
					cls.push(self.getBaseCssClasses("disabled"));
					elAttrs["aria-disabled"] = "true"
				}
				if (control.get("highlighted")) {
					cls.push(self.getBaseCssClasses("hover"))
				}
				if (control.get("focusable")) {
					if (UA.ieMode < 9) {
						elAttrs.hideFocus = "true"
					}
					elAttrs.tabindex = disabled ? "-1" : "0"
				}
			},
			createDom: function() {
				var self = this;
				self.beforeCreateDom(self.renderData = {}, self.childrenElSelectors = {}, self.renderCommands = {
					getBaseCssClasses: getBaseCssClassesCmd,
					getBaseCssClass: getBaseCssClassCmd
				});
				var control = self.control,
					html;
				html = self.renderTpl(startTpl) + self.renderTpl(self.get("contentTpl")) + endTpl;
				control.setInternal("el", self.$el = $(html));
				self.el = self.$el[0];
				self.fillChildrenElsBySelectors()
			},
			decorateDom: function(srcNode) {
				var self = this,
					control = self.control;
				if (!srcNode.attr("id")) {
					srcNode.attr("id", control.get("id"))
				}
				applyParser.call(self, srcNode, self.constructor.HTML_PARSER, control);
				control.setInternal("el", self.$el = srcNode);
				self.el = srcNode[0]
			},
			renderUI: function() {
				var self = this,
					control = self.control,
					el = self.$el;
				if (!control.get("srcNode")) {
					var render = control.get("render"),
						renderBefore = control.get("elBefore");
					if (renderBefore) {
						el.insertBefore(renderBefore, undefined)
					} else {
						if (render) {
							el.appendTo(render, undefined)
						} else {
							el.appendTo(doc.body, undefined)
						}
					}
				}
			},
			bindUI: function() {
				var self = this;
				var control = self.control;
				var attrs = control.getAttrs();
				var attrName, attrCfg;
				for (attrName in attrs) {
					attrCfg = attrs[attrName];
					var ucName = S.ucfirst(attrName);
					var attrChangeFn = self[ON_SET + ucName];
					if (attrCfg.view && attrChangeFn) {
						control.on("after" + ucName + "Change", onSetAttrChange, self)
					}
				}
			},
			destructor: function() {
				if (this.$el) {
					this.$el.remove()
				}
			},
			$: function(selector) {
				return this.$el.all(selector)
			},
			fillChildrenElsBySelectors: function(childrenElSelectors) {
				var self = this,
					el = self.$el,
					control = self.control,
					childName, selector;
				childrenElSelectors = childrenElSelectors || self.childrenElSelectors;
				for (childName in childrenElSelectors) {
					selector = childrenElSelectors[childName];
					if (typeof selector === "function") {
						control.setInternal(childName, selector(el))
					} else {
						control.setInternal(childName, self.$(S.substitute(selector, self.renderData)))
					}
					delete childrenElSelectors[childName]
				}
			},
			renderTpl: function(tpl, renderData, renderCommands) {
				var self = this;
				renderData = renderData || self.renderData;
				renderCommands = renderCommands || self.renderCommands;
				var XTemplate = self.get("xtemplate");
				return (new XTemplate(tpl, {
					control: self.control,
					view: self,
					commands: renderCommands
				})).render(renderData)
			},
			getComponentConstructorByNode: function(prefixCls, childNode) {
				var cls = childNode[0].className;
				if (cls) {
					var componentCss = findComponentCss(cls, prefixCls);
					return Manager.getConstructorByXClass(componentCss)
				}
				return null
			},
			getComponentCssClasses: function() {
				var self = this;
				if (self.componentCssClasses) {
					return self.componentCssClasses
				}
				var control = self.control,
					constructor = control.constructor,
					xclass, re = [];
				while (constructor && !constructor.prototype.hasOwnProperty("isControl")) {
					xclass = constructor.xclass;
					if (xclass) {
						re.push(xclass)
					}
					constructor = constructor.superclass && constructor.superclass.constructor
				}
				self.componentCssClasses = re;
				return re
			},
			getBaseCssClasses: function(extras) {
				extras = normalExtras(extras);
				var componentCssClasses = this.getComponentCssClasses(),
					i = 0,
					control = this.get("control"),
					cls = "",
					l = componentCssClasses.length,
					prefixCls = control.get("prefixCls");
				for (; i < l; i++) {
					cls += prefixExtra(prefixCls, componentCssClasses[i], extras)
				}
				return trim(cls)
			},
			getBaseCssClass: function(extras) {
				return trim(prefixExtra(this.control.get("prefixCls"), this.getComponentCssClasses()[0], normalExtras(extras)))
			},
			getKeyEventTarget: function() {
				return this.$el
			},
			_onSetWidth: function(w) {
				this.$el.width(w)
			},
			_onSetHeight: function(h) {
				this.$el.height(h)
			},
			_onSetContent: function(c) {
				var el = this.$el;
				el.html(c);
				if (!this.get("allowTextSelection")) {
					el.unselectable()
				}
			},
			_onSetVisible: function(visible) {
				var self = this,
					el = self.$el,
					hiddenCls = self.getBaseCssClasses("hidden");
				if (visible) {
					el.removeClass(hiddenCls)
				} else {
					el.addClass(hiddenCls)
				}
			},
			_onSetHighlighted: function(v) {
				var self = this,
					componentCls = self.getBaseCssClasses("hover"),
					el = self.$el;
				el[v ? "addClass" : "removeClass"](componentCls)
			},
			_onSetDisabled: function(v) {
				var self = this,
					control = self.control,
					componentCls = self.getBaseCssClasses("disabled"),
					el = self.$el;
				el[v ? "addClass" : "removeClass"](componentCls).attr("aria-disabled", v);
				if (control.get("focusable")) {
					self.getKeyEventTarget().attr("tabindex", v ? -1 : 0)
				}
			},
			_onSetActive: function(v) {
				var self = this,
					componentCls = self.getBaseCssClasses("active");
				self.$el[v ? "addClass" : "removeClass"](componentCls).attr("aria-pressed", !!v)
			},
			_onSetFocused: function(v) {
				var self = this,
					el = self.$el,
					componentCls = self.getBaseCssClasses("focused");
				el[v ? "addClass" : "removeClass"](componentCls)
			},
			_onSetZIndex: function(x) {
				this.$el.css("z-index", x)
			}
		}, {
			__hooks__: {
				decorateDom: ComponentProcess.prototype.__getHook("__decorateDom"),
				beforeCreateDom: ComponentProcess.prototype.__getHook("__beforeCreateDom")
			},
			extend: function extend(extensions, px, sx) {
				var SuperClass = this,
					NewClass, parsers = {};
				NewClass = ComponentProcess.extend.apply(SuperClass, arguments);
				NewClass[HTML_PARSER] = NewClass[HTML_PARSER] || {};
				if (S.isArray(extensions)) {
					S.each(extensions.concat(NewClass), function(ext) {
						if (ext) {
							S.each(ext.HTML_PARSER, function(v, name) {
								parsers[name] = v
							})
						}
					});
					NewClass[HTML_PARSER] = parsers
				}
				S.mix(NewClass[HTML_PARSER], SuperClass[HTML_PARSER], false);
				NewClass.extend = extend;
				return NewClass
			},
			ATTRS: {
				control: {
					setter: function(v) {
						this.control = v
					}
				},
				xtemplate: {
					value: XTemplateRuntime
				},
				contentTpl: {
					value: function(scope) {
						return scope.get("content") || ""
					}
				}
			},
			HTML_PARSER: {
				id: function(el) {
					var id = el[0].id;
					return id ? id : undefined
				},
				content: function(el) {
					return el.html()
				},
				disabled: function(el) {
					return el.hasClass(this.getBaseCssClass("disabled"))
				}
			},
			name: "render"
		})
	});
KISSY.add("component/control", ["node", "./control/process", "component/manager", "./control/render"], function(S,
	require) {
	var Node = require("node");
	var ComponentProcess = require("./control/process");
	var Manager = require("component/manager");
	var Render = require("./control/render");
	var ie = S.UA.ieMode,
		Features = S.Features,
		Gesture = Node.Gesture,
		isTouchGestureSupported = Features.isTouchGestureSupported();
	var Control = ComponentProcess.extend({
		isControl: true,
		createDom: function() {
			var self = this,
				Render = self.get("xrender"),
				view = self.get("view"),
				id = self.get("id"),
				el;
			if (view) {
				view.set("control", self)
			} else {
				self.set("view", this.view = view = new Render({
					control: self
				}))
			}
			view.create();
			el = view.getKeyEventTarget();
			if (!self.get("allowTextSelection")) {
				el.unselectable()
			}
			Manager.addComponent(id, self)
		},
		renderUI: function() {
			this.view.render()
		},
		bindUI: function() {
			var self = this,
				el = self.view.getKeyEventTarget();
			if (self.get("focusable")) {
				el.on("focus", self.handleFocus, self).on("blur", self.handleBlur, self).on("keydown", self.handleKeydown,
					self)
			}
			if (self.get("handleMouseEvents")) {
				el = self.$el;
				el.on("mouseenter", self.handleMouseEnter, self).on("mouseleave", self.handleMouseLeave, self).on(
					"contextmenu", self.handleContextMenu, self);
				el.on(Gesture.start, self.handleMouseDown, self).on(Gesture.end, self.handleMouseUp, self).on(Gesture.tap,
					self.handleClick, self);
				if (Gesture.cancel) {
					el.on(Gesture.cancel, self.handleMouseUp, self)
				}
				if (ie < 9) {
					el.on("dblclick", self.handleDblClick, self)
				}
			}
		},
		sync: function() {
			var self = this;
			self.fire("beforeSyncUI");
			self.syncUI();
			self.view.sync();
			self.__callPluginsMethod("pluginSyncUI");
			self.fire("afterSyncUI")
		},
		createComponent: function(cfg, parent) {
			return Manager.createComponent(cfg, parent || this)
		},
		_onSetFocused: function(v) {
			var target = this.view.getKeyEventTarget()[0];
			if (v) {
				target.focus()
			} else {
				if (target.ownerDocument.activeElement === target) {
					target.ownerDocument.body.focus()
				}
			}
		},
		_onSetX: function(x) {
			this.$el.offset({
				left: x
			})
		},
		_onSetY: function(y) {
			this.$el.offset({
				top: y
			})
		},
		_onSetVisible: function(v) {
			this.fire(v ? "show" : "hide")
		},
		show: function() {
			var self = this;
			self.render();
			self.set("visible", true);
			return self
		},
		hide: function() {
			var self = this;
			self.set("visible", false);
			return self
		},
		focus: function() {
			if (this.get("focusable")) {
				this.set("focused", true)
			}
		},
		blur: function() {
			if (this.get("focusable")) {
				this.set("focused", false)
			}
		},
		move: function(x, y) {
			this.set({
				x: x,
				y: y
			})
		},
		handleDblClick: function(ev) {
			if (!this.get("disabled")) {
				this.handleDblClickInternal(ev)
			}
		},
		handleDblClickInternal: function(ev) {
			this.handleClickInternal(ev)
		},
		handleMouseEnter: function(ev) {
			if (!this.get("disabled")) {
				this.handleMouseEnterInternal(ev)
			}
		},
		handleMouseEnterInternal: function(ev) {
			this.set("highlighted", !!ev)
		},
		handleMouseLeave: function(ev) {
			if (!this.get("disabled")) {
				this.handleMouseLeaveInternal(ev)
			}
		},
		handleMouseLeaveInternal: function(ev) {
			var self = this;
			self.set("active", false);
			self.set("highlighted", !ev)
		},
		handleMouseDown: function(ev) {
			if (!this.get("disabled")) {
				this.handleMouseDownInternal(ev)
			}
		},
		handleMouseDownInternal: function(ev) {
			var self = this,
				n, isMouseActionButton = ev.which === 1;
			if (isMouseActionButton || isTouchGestureSupported) {
				if (self.get("activeable")) {
					self.set("active", true)
				}
				if (self.get("focusable")) {
					self.focus()
				}
				var type = ev.originalEvent.type.toLowerCase();
				if (!self.get("allowTextSelection") && (type.indexOf("mouse") !== -1 || type.indexOf("pointer") !== -1)) {
					n = ev.target.nodeName;
					n = n && n.toLowerCase();
					if (n !== "input" && n !== "textarea" && n !== "button") {
						ev.preventDefault()
					}
				}
			}
		},
		handleMouseUp: function(ev) {
			if (!this.get("disabled")) {
				this.handleMouseUpInternal(ev)
			}
		},
		handleMouseUpInternal: function(ev) {
			var self = this;
			if (self.get("active") && (ev.which === 1 || isTouchGestureSupported)) {
				self.set("active", false)
			}
		},
		handleContextMenu: function(ev) {
			if (!this.get("disabled")) {
				this.handleContextMenuInternal(ev)
			}
		},
		handleContextMenuInternal: function() {},
		handleFocus: function() {
			if (!this.get("disabled")) {
				this.handleFocusInternal()
			}
		},
		handleFocusInternal: function() {
			this.focus();
			this.fire("focus")
		},
		handleBlur: function() {
			if (!this.get("disabled")) {
				this.handleBlurInternal()
			}
		},
		handleBlurInternal: function() {
			this.blur();
			this.fire("blur")
		},
		handleKeydown: function(ev) {
			var self = this;
			if (!this.get("disabled") && self.handleKeyDownInternal(ev)) {
				ev.halt();
				return true
			}
			return undefined
		},
		handleKeyDownInternal: function(ev) {
			if (ev.keyCode === Node.KeyCode.ENTER) {
				return this.handleClickInternal(ev)
			}
			return undefined
		},
		handleClick: function(ev) {
			if (!this.get("disabled")) {
				this.handleClickInternal(ev)
			}
		},
		handleClickInternal: function() {
			var self = this;
			if (self.get("focusable")) {
				self.focus()
			}
		},
		destructor: function() {
			var self = this;
			Manager.removeComponent(self.get("id"));
			if (self.view) {
				self.view.destroy()
			} else {
				if (self.get("srcNode")) {
					self.get("srcNode").remove()
				}
			}
		}
	}, {
		name: "control",
		ATTRS: {
			id: {
				view: 1,
				valueFn: function() {
					return S.guid("ks-component")
				}
			},
			content: {
				view: 1,
				value: ""
			},
			width: {
				view: 1
			},
			height: {
				view: 1
			},
			elCls: {
				view: 1,
				value: [],
				setter: function(v) {
					if (typeof v === "string") {
						v = v.split(/\s+/)
					}
					return v || []
				}
			},
			elStyle: {
				view: 1,
				value: {}
			},
			elAttrs: {
				view: 1,
				value: {}
			},
			elBefore: {},
			el: {
				setter: function(el) {
					this.$el = el;
					this.el = el[0]
				}
			},
			x: {},
			y: {},
			xy: {
				setter: function(v) {
					var self = this,
						xy = S.makeArray(v);
					if (xy.length) {
						if (xy[0] !== undefined) {
							self.set("x", xy[0])
						}
						if (xy[1] !== undefined) {
							self.set("y", xy[1])
						}
					}
					return v
				},
				getter: function() {
					return [this.get("x"), this.get("y")]
				}
			},
			zIndex: {
				view: 1
			},
			render: {},
			visible: {
				sync: 0,
				value: true,
				view: 1
			},
			srcNode: {
				setter: function(v) {
					return Node.all(v)
				}
			},
			handleMouseEvents: {
				value: true
			},
			focusable: {
				value: true,
				view: 1
			},
			allowTextSelection: {
				value: false
			},
			activeable: {
				value: true
			},
			focused: {
				view: 1
			},
			active: {
				view: 1,
				value: false
			},
			highlighted: {
				view: 1,
				value: false
			},
			prefixCls: {
				view: 1,
				value: S.config("component/prefixCls") || "ks-"
			},
			prefixXClass: {},
			parent: {
				setter: function(p, prev) {
					if (prev = this.get("parent")) {
						this.removeTarget(prev)
					}
					if (p) {
						this.addTarget(p)
					}
				}
			},
			disabled: {
				view: 1,
				value: false
			},
			xrender: {
				value: Render
			},
			view: {
				setter: function(v) {
					this.view = v
				}
			}
		}
	});

	function getDefaultRender() {
		var attrs, constructor = this;
		do {
			attrs = constructor.ATTRS;
			constructor = constructor.superclass
		} while (!attrs || !attrs.xrender);
		return attrs.xrender.value
	}
	Control.getDefaultRender = getDefaultRender;
	Control.extend = function extend(extensions, px, sx) {
		var args = S.makeArray(arguments),
			baseClass = this,
			xclass, newClass, argsLen = args.length,
			last = args[argsLen - 1];
		if (xclass = last.xclass) {
			last.name = xclass
		}
		newClass = ComponentProcess.extend.apply(baseClass, args);
		if (xclass) {
			Manager.setConstructorByXClass(xclass, newClass)
		}
		newClass.extend = extend;
		newClass.getDefaultRender = getDefaultRender;
		return newClass
	};
	return Control
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:15
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 base
*/

KISSY.add("base", ["attribute"], function(S, require) {
	var Attribute = require("attribute");
	var ucfirst = S.ucfirst,
		ON_SET = "_onSet",
		noop = S.noop;

	function __getHook(method, reverse) {
		return function(origFn) {
			return function wrap() {
				var self = this;
				if (reverse) {
					origFn.apply(self, arguments)
				} else {
					self.callSuper.apply(self, arguments)
				}
				var extensions = arguments.callee.__owner__.__extensions__ || [];
				if (reverse) {
					extensions.reverse()
				}
				callExtensionsMethod(self, extensions, method, arguments);
				if (reverse) {
					self.callSuper.apply(self, arguments)
				} else {
					origFn.apply(self, arguments)
				}
			}
		}
	}
	var Base = Attribute.extend({
		constructor: function() {
			var self = this;
			self.callSuper.apply(self, arguments);
			var listeners = self.get("listeners");
			for (var n in listeners) {
				self.on(n, listeners[n])
			}
			self.initializer();
			constructPlugins(self);
			callPluginsMethod.call(self, "pluginInitializer");
			self.bindInternal();
			self.syncInternal()
		},
		initializer: noop,
		__getHook: __getHook,
		__callPluginsMethod: callPluginsMethod,
		bindInternal: function() {
			var self = this,
				attrs = self.getAttrs(),
				attr, m;
			for (attr in attrs) {
				m = ON_SET + ucfirst(attr);
				if (self[m]) {
					self.on("after" + ucfirst(attr) + "Change", onSetAttrChange)
				}
			}
		},
		syncInternal: function() {
			var self = this,
				cs = [],
				i, c = self.constructor,
				attrs = self.getAttrs();
			while (c) {
				cs.push(c);
				c = c.superclass && c.superclass.constructor
			}
			cs.reverse();
			for (i = 0; i < cs.length; i++) {
				var ATTRS = cs[i].ATTRS || {};
				for (var attributeName in ATTRS) {
					if (attributeName in attrs) {
						var attributeValue, onSetMethod;
						var onSetMethodName = ON_SET + ucfirst(attributeName);
						if ((onSetMethod = self[onSetMethodName]) && attrs[attributeName].sync !== 0 && (attributeValue = self.get(
								attributeName)) !== undefined) {
							onSetMethod.call(self, attributeValue)
						}
					}
				}
			}
		},
		plug: function(plugin) {
			var self = this;
			if (typeof plugin === "function") {
				var Plugin = plugin;
				plugin = new Plugin
			}
			if (plugin.pluginInitializer) {
				plugin.pluginInitializer(self)
			}
			self.get("plugins").push(plugin);
			return self
		},
		unplug: function(plugin) {
			var plugins = [],
				self = this,
				isString = typeof plugin === "string";
			S.each(self.get("plugins"), function(p) {
				var keep = 0,
					pluginId;
				if (plugin) {
					if (isString) {
						pluginId = p.get && p.get("pluginId") || p.pluginId;
						if (pluginId !== plugin) {
							plugins.push(p);
							keep = 1
						}
					} else {
						if (p !== plugin) {
							plugins.push(p);
							keep = 1
						}
					}
				}
				if (!keep) {
					p.pluginDestructor(self)
				}
			});
			self.setInternal("plugins", plugins);
			return self
		},
		getPlugin: function(id) {
			var plugin = null;
			S.each(this.get("plugins"), function(p) {
				var pluginId = p.get && p.get("pluginId") || p.pluginId;
				if (pluginId === id) {
					plugin = p;
					return false
				}
				return undefined
			});
			return plugin
		},
		destructor: S.noop,
		destroy: function() {
			var self = this;
			if (!self.get("destroyed")) {
				callPluginsMethod.call(self, "pluginDestructor");
				self.destructor();
				self.set("destroyed", true);
				self.fire("destroy");
				self.detach()
			}
		}
	});
	S.mix(Base, {
		__hooks__: {
			initializer: __getHook(),
			destructor: __getHook("__destructor", true)
		},
		ATTRS: {
			plugins: {
				value: []
			},
			destroyed: {
				value: false
			},
			listeners: {
				value: []
			}
		},
		extend: function extend(extensions, px, sx) {
			if (!S.isArray(extensions)) {
				sx = px;
				px = extensions;
				extensions = []
			}
			sx = sx || {};
			px = px || {};
			var SubClass = Attribute.extend.call(this, px, sx);
			SubClass.__extensions__ = extensions;
			baseAddMembers.call(SubClass, {});
			if (extensions.length) {
				var attrs = {},
					prototype = {};
				S.each(extensions.concat(SubClass), function(ext) {
					if (ext) {
						S.each(ext.ATTRS, function(v, name) {
							var av = attrs[name] = attrs[name] || {};
							S.mix(av, v)
						});
						var exp = ext.prototype,
							p;
						for (p in exp) {
							if (exp.hasOwnProperty(p)) {
								prototype[p] = exp[p]
							}
						}
					}
				});
				SubClass.ATTRS = attrs;
				prototype.constructor = SubClass;
				S.augment(SubClass, prototype)
			}
			SubClass.extend = sx.extend || extend;
			SubClass.addMembers = baseAddMembers;
			return SubClass
		}
	});
	var addMembers = Base.addMembers;

	function baseAddMembers(px) {
		var SubClass = this;
		var extensions = SubClass.__extensions__,
			hooks = SubClass.__hooks__,
			proto = SubClass.prototype;
		if (extensions.length && hooks) {
			for (var h in hooks) {
				if (proto.hasOwnProperty(h) && !px.hasOwnProperty(h)) {
					continue
				}
				px[h] = px[h] || noop
			}
		}
		return addMembers.call(SubClass, px)
	}

	function onSetAttrChange(e) {
		var self = this,
			method;
		if (e.target === self) {
			method = self[ON_SET + e.type.slice(5).slice(0, -6)];
			method.call(self, e.newVal, e)
		}
	}

	function constructPlugins(self) {
		var plugins = self.get("plugins"),
			Plugin;
		S.each(plugins, function(plugin, i) {
			if (typeof plugin === "function") {
				Plugin = plugin;
				plugins[i] = new Plugin
			}
		})
	}

	function callPluginsMethod(method) {
		var len, self = this,
			plugins = self.get("plugins");
		if (len = plugins.length) {
			for (var i = 0; i < len; i++) {
				if (plugins[i][method]) {
					plugins[i][method](self)
				}
			}
		}
	}

	function callExtensionsMethod(self, extensions, method, args) {
		var len;
		if (len = extensions && extensions.length) {
			for (var i = 0; i < len; i++) {
				var fn = extensions[i] && (!method ? extensions[i] : extensions[i].prototype[method]);
				if (fn) {
					fn.apply(self, args || [])
				}
			}
		}
	}
	S.Base = Base;
	return Base
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:15
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 attribute
*/

KISSY.add("attribute", ["event/custom"], function(S, require, exports, module) {
	var RE_DASH = /(?:^|-)([a-z])/ig;
	var CustomEvent = require("event/custom");
	module.exports = Attribute;
	var bind = S.bind;

	function replaceToUpper() {
		return arguments[1].toUpperCase()
	}

	function camelCase(name) {
		return name.replace(RE_DASH, replaceToUpper)
	}
	var INVALID = {};
	var FALSE = false;

	function normalFn(host, method) {
		if (typeof method === "string") {
			return host[method]
		}
		return method
	}

	function getAttrVals(self) {
		return self.__attrVals || (self.__attrVals = {})
	}

	function whenAttrChangeEventName(when, name) {
		return when + S.ucfirst(name) + "Change"
	}

	function __fireAttrChange(self, when, name, prevVal, newVal, subAttrName, attrName, data) {
		attrName = attrName || name;
		return self.fire(whenAttrChangeEventName(when, name), S.mix({
			attrName: attrName,
			subAttrName: subAttrName,
			prevVal: prevVal,
			newVal: newVal
		}, data))
	}

	function ensureNonEmpty(obj, name, doNotCreate) {
		var ret = obj[name];
		if (!doNotCreate && !ret) {
			obj[name] = ret = {}
		}
		return ret || {}
	}

	function getValueByPath(o, path) {
		for (var i = 0, len = path.length; o !== undefined && i < len; i++) {
			o = o[path[i]]
		}
		return o
	}

	function setValueByPath(o, path, val) {
		var len = path.length - 1,
			s = o;
		if (len >= 0) {
			for (var i = 0; i < len; i++) {
				o = o[path[i]]
			}
			if (o !== undefined) {
				o[path[i]] = val
			} else {
				s = undefined
			}
		}
		return s
	}

	function getPathNamePair(name) {
		var path;
		if (name.indexOf(".") !== -1) {
			path = name.split(".");
			name = path.shift()
		}
		return {
			path: path,
			name: name
		}
	}

	function getValueBySubValue(prevVal, path, value) {
		var tmp = value;
		if (path) {
			if (prevVal === undefined) {
				tmp = {}
			} else {
				tmp = S.clone(prevVal)
			}
			setValueByPath(tmp, path, value)
		}
		return tmp
	}

	function prepareDefaultSetFn(self, name) {
		var defaultBeforeFns = ensureNonEmpty(self, "__defaultBeforeFns");
		if (defaultBeforeFns[name]) {
			return
		}
		defaultBeforeFns[name] = 1;
		var beforeChangeEventName = whenAttrChangeEventName("before", name);
		self.publish(beforeChangeEventName, {
			defaultFn: defaultSetFn
		})
	}

	function setInternal(self, name, value, opts, attrs) {
		var path, subVal, prevVal, pathNamePair = getPathNamePair(name),
			fullName = name;
		name = pathNamePair.name;
		path = pathNamePair.path;
		prevVal = self.get(name);
		prepareDefaultSetFn(self, name);
		if (path) {
			subVal = getValueByPath(prevVal, path)
		}
		if (!opts.force) {
			if (!path && prevVal === value) {
				return undefined
			} else {
				if (path && subVal === value) {
					return undefined
				}
			}
		}
		value = getValueBySubValue(prevVal, path, value);
		var beforeEventObject = S.mix({
			attrName: name,
			subAttrName: fullName,
			prevVal: prevVal,
			newVal: value,
			_opts: opts,
			_attrs: attrs,
			target: self
		}, opts.data);
		if (opts.silent) {
			if (FALSE === defaultSetFn.call(self, beforeEventObject)) {
				return FALSE
			}
		} else {
			if (FALSE === self.fire(whenAttrChangeEventName("before", name), beforeEventObject)) {
				return FALSE
			}
		}
		return self
	}

	function defaultSetFn(e) {
		if (e.target !== this) {
			return undefined
		}
		var self = this,
			value = e.newVal,
			prevVal = e.prevVal,
			name = e.attrName,
			fullName = e.subAttrName,
			attrs = e._attrs,
			opts = e._opts;
		var ret = self.setInternal(name, value);
		if (ret === FALSE) {
			return ret
		}
		if (!opts.silent) {
			value = getAttrVals(self)[name];
			__fireAttrChange(self, "after", name, prevVal, value, fullName, null, opts.data);
			if (attrs) {
				attrs.push({
					prevVal: prevVal,
					newVal: value,
					attrName: name,
					subAttrName: fullName
				})
			} else {
				__fireAttrChange(self, "", "*", [prevVal], [value], [fullName], [name], opts.data)
			}
		}
		return undefined
	}

	function Attribute(config) {
		var self = this,
			c = self.constructor;
		self.userConfig = config;
		while (c) {
			addAttrs(self, c.ATTRS);
			c = c.superclass ? c.superclass.constructor : null
		}
		initAttrs(self, config)
	}

	function wrapProtoForSuper(px, SubClass) {
		var hooks = SubClass.__hooks__ || {};
		for (var p in hooks) {
			if (p in px) {
				px[p] = hooks[p](px[p])
			}
		}
		S.each(px, function(v, p) {
			if (typeof v === "function") {
				var wrapped = 0;
				if (v.__owner__) {
					var originalOwner = v.__owner__;
					delete v.__owner__;
					delete v.__name__;
					wrapped = v.__wrapped__ = 1;
					var newV = bind(v);
					newV.__owner__ = originalOwner;
					newV.__name__ = p;
					originalOwner.prototype[p] = newV
				} else {
					if (v.__wrapped__) {
						wrapped = 1
					}
				}
				if (wrapped) {
					px[p] = v = bind(v)
				}
				v.__owner__ = SubClass;
				v.__name__ = p
			}
		})
	}

	function addMembers(px) {
		var SubClass = this;
		wrapProtoForSuper(px, SubClass);
		S.mix(SubClass.prototype, px)
	}
	Attribute.extend = function extend(px, sx) {
		var SubClass, SuperClass = this;
		sx = sx || {};
		px = px || {};
		var hooks, sxHooks = sx.__hooks__;
		if (hooks = SuperClass.__hooks__) {
			sxHooks = sx.__hooks__ = sx.__hooks__ || {};
			S.mix(sxHooks, hooks, false)
		}
		var name = sx.name || "AttributeDerived";
		if (px.hasOwnProperty("constructor")) {
			SubClass = px.constructor
		} else {
			if ("@DEBUG@") {
				SubClass = (new Function("return function " + camelCase(name) + "(){ " +
					"this.callSuper.apply(this, arguments);" + "}"))()
			} else {
				SubClass = function() {
					this.callSuper.apply(this, arguments)
				}
			}
		}
		px.constructor = SubClass;
		SubClass.__hooks__ = sxHooks;
		wrapProtoForSuper(px, SubClass);
		var inheritedStatics, sxInheritedStatics = sx.inheritedStatics;
		if (inheritedStatics = SuperClass.inheritedStatics) {
			sxInheritedStatics = sx.inheritedStatics = sx.inheritedStatics || {};
			S.mix(sxInheritedStatics, inheritedStatics, false)
		}
		S.extend(SubClass, SuperClass, px, sx);
		if (sxInheritedStatics) {
			S.mix(SubClass, sxInheritedStatics)
		}
		SubClass.extend = sx.extend || extend;
		SubClass.addMembers = addMembers;
		return SubClass
	};

	function addAttrs(host, attrs) {
		if (attrs) {
			for (var attr in attrs) {
				host.addAttr(attr, attrs[attr], false)
			}
		}
	}

	function initAttrs(host, config) {
		if (config) {
			for (var attr in config) {
				host.setInternal(attr, config[attr])
			}
		}
	}
	S.augment(Attribute, CustomEvent.Target, {
		INVALID: INVALID,
		callSuper: function() {
			var method, obj, self = this,
				args = arguments;
			if (typeof self === "function" && self.__name__) {
				method = self;
				obj = args[0];
				args = Array.prototype.slice.call(args, 1)
			} else {
				method = arguments.callee.caller;
				if (method.__wrapped__) {
					method = method.caller
				}
				obj = self
			}
			var name = method.__name__;
			if (!name) {
				return undefined
			}
			var member = method.__owner__.superclass[name];
			if (!member) {
				return undefined
			}
			return member.apply(obj, args || [])
		},
		getAttrs: function() {
			return this.__attrs || (this.__attrs = {})
		},
		getAttrVals: function() {
			var self = this,
				o = {},
				a, attrs = self.getAttrs();
			for (a in attrs) {
				o[a] = self.get(a)
			}
			return o
		},
		addAttr: function(name, attrConfig, override) {
			var self = this,
				attrs = self.getAttrs(),
				attr, cfg = S.clone(attrConfig);
			if (attr = attrs[name]) {
				S.mix(attr, cfg, override)
			} else {
				attrs[name] = cfg
			}
			return self
		},
		addAttrs: function(attrConfigs, initialValues) {
			var self = this;
			S.each(attrConfigs, function(attrConfig, name) {
				self.addAttr(name, attrConfig)
			});
			if (initialValues) {
				self.set(initialValues)
			}
			return self
		},
		hasAttr: function(name) {
			return this.getAttrs().hasOwnProperty(name)
		},
		removeAttr: function(name) {
			var self = this;
			var __attrVals = getAttrVals(self);
			var __attrs = self.getAttrs();
			if (self.hasAttr(name)) {
				delete __attrs[name];
				delete __attrVals[name]
			}
			return self
		},
		set: function(name, value, opts) {
			var self = this,
				e;
			if (S.isPlainObject(name)) {
				opts = value;
				opts = opts || {};
				var all = Object(name),
					attrs = [],
					errors = [];
				for (name in all) {
					if ((e = validate(self, name, all[name], all)) !== undefined) {
						errors.push(e)
					}
				}
				if (errors.length) {
					if (opts.error) {
						opts.error(errors)
					}
					return FALSE
				}
				for (name in all) {
					setInternal(self, name, all[name], opts, attrs)
				}
				var attrNames = [],
					prevVals = [],
					newVals = [],
					subAttrNames = [];
				S.each(attrs, function(attr) {
					prevVals.push(attr.prevVal);
					newVals.push(attr.newVal);
					attrNames.push(attr.attrName);
					subAttrNames.push(attr.subAttrName)
				});
				if (attrNames.length) {
					__fireAttrChange(self, "", "*", prevVals, newVals, subAttrNames, attrNames, opts.data)
				}
				return self
			}
			opts = opts || {};
			e = validate(self, name, value);
			if (e !== undefined) {
				if (opts.error) {
					opts.error(e)
				}
				return FALSE
			}
			return setInternal(self, name, value, opts)
		},
		setInternal: function(name, value) {
			var self = this,
				setValue, attrConfig = ensureNonEmpty(self.getAttrs(), name),
				setter = attrConfig.setter;
			if (setter && (setter = normalFn(self, setter))) {
				setValue = setter.call(self, value, name)
			}
			if (setValue === INVALID) {
				return FALSE
			}
			if (setValue !== undefined) {
				value = setValue
			}
			getAttrVals(self)[name] = value;
			return undefined
		},
		get: function(name) {
			var self = this,
				dot = ".",
				path, attrVals = getAttrVals(self),
				attrConfig, getter, ret;
			if (name.indexOf(dot) !== -1) {
				path = name.split(dot);
				name = path.shift()
			}
			attrConfig = ensureNonEmpty(self.getAttrs(), name, 1);
			getter = attrConfig.getter;
			ret = name in attrVals ? attrVals[name] : getDefAttrVal(self, name);
			if (getter && (getter = normalFn(self, getter))) {
				ret = getter.call(self, ret, name)
			}
			if (!(name in attrVals) && ret !== undefined) {
				attrVals[name] = ret
			}
			if (path) {
				ret = getValueByPath(ret, path)
			}
			return ret
		},
		reset: function(name, opts) {
			var self = this;
			if (typeof name === "string") {
				if (self.hasAttr(name)) {
					return self.set(name, getDefAttrVal(self, name), opts)
				} else {
					return self
				}
			}
			opts = name;
			var attrs = self.getAttrs(),
				values = {};
			for (name in attrs) {
				values[name] = getDefAttrVal(self, name)
			}
			self.set(values, opts);
			return self
		}
	});

	function getDefAttrVal(self, name) {
		var attrs = self.getAttrs(),
			attrConfig = ensureNonEmpty(attrs, name, 1),
			valFn = attrConfig.valueFn,
			val;
		if (valFn && (valFn = normalFn(self, valFn))) {
			val = valFn.call(self);
			if (val !== undefined) {
				attrConfig.value = val
			}
			delete attrConfig.valueFn;
			attrs[name] = attrConfig
		}
		return attrConfig.value
	}

	function validate(self, name, value, all) {
		var path, prevVal, pathNamePair;
		pathNamePair = getPathNamePair(name);
		name = pathNamePair.name;
		path = pathNamePair.path;
		if (path) {
			prevVal = self.get(name);
			value = getValueBySubValue(prevVal, path, value)
		}
		var attrConfig = ensureNonEmpty(self.getAttrs(), name),
			e, validator = attrConfig.validator;
		if (validator && (validator = normalFn(self, validator))) {
			e = validator.call(self, value, name, all);
			if (e !== undefined && e !== true) {
				return e
			}
		}
		return undefined
	}
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:17
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/manager
*/

KISSY.add("component/manager", [], function(S) {
	var basePriority = 0,
		Manager, uis = {},
		componentInstances = {};
	Manager = {
		__instances: componentInstances,
		addComponent: function(id, component) {
			componentInstances[id] = component
		},
		removeComponent: function(id) {
			delete componentInstances[id]
		},
		getComponent: function(id) {
			return componentInstances[id]
		},
		createComponent: function(component, parent) {
			var ChildConstructor, xclass;
			if (component) {
				if (!component.isControl && parent) {
					if (!component.prefixCls) {
						component.prefixCls = parent.get("prefixCls")
					}
					if (!component.xclass && component.prefixXClass) {
						component.xclass = component.prefixXClass;
						if (component.xtype) {
							component.xclass += "-" + component.xtype
						}
					}
				}
				if (!component.isControl && (xclass = component.xclass)) {
					ChildConstructor = Manager.getConstructorByXClass(xclass);
					if (!ChildConstructor) {
						S.error("can not find class by xclass desc : " + xclass)
					}
					component = new ChildConstructor(component)
				}
				if (component.isControl && parent) {
					component.setInternal("parent", parent)
				}
			}
			return component
		},
		getConstructorByXClass: function(classNames) {
			var cs = classNames.split(/\s+/),
				p = -1,
				t, i, uic, ui = null;
			for (i = 0; i < cs.length; i++) {
				uic = uis[cs[i]];
				if (uic && (t = uic.priority) > p) {
					p = t;
					ui = uic.constructor
				}
			}
			return ui
		},
		setConstructorByXClass: function(className, ComponentConstructor) {
			uis[className] = {
				constructor: ComponentConstructor,
				priority: basePriority++
			}
		}
	};
	return Manager
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:31
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 xtemplate/runtime/scope
 xtemplate/runtime/commands
 xtemplate/runtime
*/

KISSY.add("xtemplate/runtime/scope", [], function(S) {
	function Scope(data, affix) {
		this.data = data || {};
		this.affix = affix;
		this.root = this
	}
	Scope.prototype = {
		isScope: 1,
		setParent: function(parentScope) {
			this.parent = parentScope;
			this.root = parentScope.root
		},
		getParent: function() {
			return this.parent
		},
		getRoot: function() {
			return this.root
		},
		set: function(name, value) {
			if (!this.affix) {
				this.affix = {}
			}
			this.affix[name] = value
		},
		setData: function(data) {
			this.data = data
		},
		getData: function() {
			return this.data
		},
		mix: function(v) {
			if (!this.affix) {
				this.affix = {}
			}
			S.mix(this.affix, v)
		},
		has: function(name) {
			var data = this.data;
			var affix = this.affix;
			if (affix && name in affix) {
				return true
			}
			return typeof data === "object" && name in data
		},
		get: function(name) {
			var data = this.data;
			var affix = this.affix;
			if (affix && name in affix) {
				return affix[name]
			}
			if (typeof data === "object" && name in data) {
				return data[name]
			}
			return undefined
		},
		resolve: function(name, depth) {
			if (name === ".") {
				name = "this"
			}
			var parts = name.split(".");
			var scope = this,
				len, i, v, p, valid;
			if (parts[0] === "root") {
				parts.shift();
				scope = scope.root
			} else {
				if (depth) {
					while (scope && depth--) {
						scope = scope.parent
					}
				}
			}
			var endScopeFind = 0;
			len = parts.length;
			while (scope) {
				valid = 1;
				v = scope;
				for (i = 0; i < len; i++) {
					p = parts[i];
					if (p === "this") {
						endScopeFind = 1;
						continue
					}
					if (v === scope) {
						if (!scope.has(p)) {
							valid = 0;
							break
						} else {
							v = scope.get(p);
							endScopeFind = 1
						}
					} else {
						if (v == null || typeof v !== "object" || !(p in v)) {
							valid = 0;
							break
						}
						v = v[p]
					}
				}
				if (valid) {
					if (v && v.isScope) {
						v = v.data
					}
					if (typeof v === "function") {
						v = v.call(this.data)
					}
					return [v]
				}
				if (endScopeFind) {
					break
				}
				scope = scope.parent
			}
			return false
		}
	};
	return Scope
});
KISSY.add("xtemplate/runtime/commands", ["path", "./scope"], function(S, require) {
	var commands;
	var Path = require("path");
	var Scope = require("./scope");
	commands = {
		"debugger": S.noop,
		each: function(scope, config) {
			var params = config.params;
			var param0 = params[0];
			var xindexName = params[2] || "xindex";
			var valueName = params[1];
			var buffer = "";
			var xcount;
			var opScope;
			var affix;
			if (param0) {
				opScope = new Scope;
				if (S.isArray(param0)) {
					xcount = param0.length;
					for (var xindex = 0; xindex < xcount; xindex++) {
						opScope.data = param0[xindex];
						affix = opScope.affix = {
							xcount: xcount
						};
						affix[xindexName] = xindex;
						if (valueName) {
							affix[valueName] = param0[xindex]
						}
						opScope.setParent(scope);
						buffer += config.fn(opScope)
					}
				} else {
					for (var name in param0) {
						opScope.data = param0[name];
						affix = opScope.affix = {};
						affix[xindexName] = name;
						if (valueName) {
							affix[valueName] = param0[name]
						}
						opScope.setParent(scope);
						buffer += config.fn(opScope)
					}
				}
			} else {
				if (config.inverse) {
					buffer = config.inverse(scope)
				}
			}
			return buffer
		},
		"with": function(scope, config) {
			var params = config.params;
			var param0 = params[0];
			var buffer = "";
			if (param0) {
				var opScope = new Scope(param0);
				opScope.setParent(scope);
				buffer = config.fn(opScope)
			} else {
				if (config.inverse) {
					buffer = config.inverse(scope)
				}
			}
			return buffer
		},
		"if": function(scope, config) {
			var params = config.params;
			var param0 = params[0];
			var buffer = "";
			if (param0) {
				if (config.fn) {
					buffer = config.fn(scope)
				}
			} else {
				if (config.inverse) {
					buffer = config.inverse(scope)
				}
			}
			return buffer
		},
		set: function(scope, config) {
			scope.mix(config.hash);
			return ""
		},
		include: function(scope, config) {
			var params = config.params;
			if (!params || params.length !== 1) {
				S.error("include must has one param");
				return ""
			}
			if (config.hash) {
				var newScope = new Scope(config.hash);
				newScope.setParent(scope);
				scope = newScope
			}
			var myName = this.config.name;
			var subTplName = params[0];
			if (subTplName.charAt(0) === ".") {
				if (myName === "unspecified") {
					S.error("parent template does not have name" + " for relative sub tpl name: " + subTplName);
					return ""
				}
				subTplName = Path.resolve(myName, "../", subTplName)
			}
			var tpl = this.config.loader.call(this, subTplName);
			config = S.merge(this.config);
			config.name = subTplName;
			config.commands = this.config.commands;
			config.macros = this.config.macros;
			return this.invokeEngine(tpl, scope, config)
		},
		macro: function(scope, config) {
			var params = config.params;
			var macroName = params[0];
			var params1 = params.slice(1);
			var macros = this.config.macros;
			if (config.fn) {
				if (!macros[macroName]) {
					macros[macroName] = {
						paramNames: params1,
						fn: config.fn
					}
				}
			} else {
				var paramValues = {};
				var macro = macros[macroName];
				if (!macro) {
					S.error("can not find macro:" + name)
				}
				S.each(macro.paramNames, function(p, i) {
					paramValues[p] = params1[i]
				});
				var newScope = new Scope(paramValues);
				return macro.fn.call(this, newScope)
			}
			return ""
		},
		parse: function(scope, config) {
			return commands.include.call(this, new Scope, config)
		}
	};
	if ("@DEBUG@") {
		commands["debugger"] = function() {
			S.globalEval("debugger")
		}
	}
	return commands
});
KISSY.add("xtemplate/runtime", ["./runtime/commands", "./runtime/scope"], function(S, require) {
	var commands = require("./runtime/commands");
	var Scope = require("./runtime/scope");
	var escapeHtml = S.escapeHtml;
	var logger = S.getLogger("s/xtemplate");

	function info(s) {
		logger.info(s)
	}

	function findCommand(commands, name) {
		var parts = name.split(".");
		var cmd = commands;
		var len = parts.length;
		for (var i = 0; i < len; i++) {
			cmd = cmd[parts[i]];
			if (!cmd) {
				break
			}
		}
		return cmd
	}

	function runInlineCommand(engine, scope, options, name, line, onlyCommand) {
		var id0;
		var config = engine.config;
		var commands = config.commands;
		var command1 = findCommand(commands, name);
		if (command1) {
			try {
				id0 = command1.call(engine, scope, options)
			} catch (e) {
				S.error(e.message + ': "' + name + '" at line ' + line)
			}
			return {
				find: true,
				value: id0
			}
		} else {
			if (onlyCommand) {
				S.error("can not find command: " + name + '" at line ' + line)
			}
		}
		return {
			find: false
		}
	}

	function getProperty(engine, scope, name, depth, line) {
		var id0;
		var config = engine.config;
		var logFn = config.silent ? info : S.error;
		var tmp2 = scope.resolve(name, depth);
		if (tmp2 === false) {
			logFn('can not find property: "' + name + '" at line ' + line, "warn")
		} else {
			id0 = tmp2[0]
		}
		return id0
	}
	var utils = {
			runBlockCommand: function(engine, scope, options, name, line) {
				var config = engine.config;
				var logFn = config.silent ? info : S.error;
				var commands = config.commands;
				var command = findCommand(commands, name);
				if (!command) {
					if (!options.params && !options.hash) {
						var property = scope.resolve(name);
						if (property === false) {
							logFn('can not find property: "' + name + '" at line ' + line);
							property = ""
						} else {
							property = property[0]
						}
						command = commands["if"];
						if (S.isArray(property)) {
							command = commands.each
						} else {
							if (typeof property === "object") {
								command = commands["with"]
							}
						}
						options.params = [property]
					} else {
						S.error("can not find command: " + name + '" at line ' + line);
						return ""
					}
				}
				var ret;
				try {
					ret = command.call(engine, scope, options)
				} catch (e) {
					S.error(e.message + ': "' + name + '" at line ' + line)
				}
				return ret
			},
			renderOutput: function(exp, escaped) {
				if (exp === undefined) {
					exp = ""
				}
				return escaped && exp ? escapeHtml(exp) : exp
			},
			getProperty: function(engine, scope, name, depth, line) {
				return getProperty(engine, scope, name, depth, line)
			},
			runInlineCommand: function(engine, scope, options, name, line) {
				var id0 = "",
					ret;
				ret = runInlineCommand(engine, scope, options, name, line);
				if (ret.find) {
					id0 = ret.value
				}
				return id0
			},
			getPropertyOrRunCommand: function(engine, scope, options, name, depth, line) {
				var id0, ret;
				var onlyCommand = options.hash || options.params;
				ret = runInlineCommand(engine, scope, options, name, line, onlyCommand);
				if (ret.find) {
					id0 = ret.value
				} else {
					if (!onlyCommand) {
						id0 = getProperty(engine, scope, name, depth, line)
					}
				}
				return id0
			}
		},
		defaultConfig = {
			silent: true,
			name: "unspecified",
			loader: function(subTplName) {
				var tpl = S.require(subTplName);
				if (!tpl) {
					S.error('template "' + subTplName + '" does not exist, ' + "need to be required or used first!")
				}
				return tpl
			}
		};

	function XTemplateRuntime(tpl, config) {
		var self = this;
		self.tpl = tpl;
		config = S.merge(defaultConfig, config);
		config.commands = S.merge(config.commands, commands);
		config.utils = utils;
		config.macros = config.macros || {};
		this.config = config
	}
	S.mix(XTemplateRuntime, {
		commands: commands,
		utils: utils,
		addCommand: function(commandName, fn) {
			commands[commandName] = fn
		},
		removeCommand: function(commandName) {
			delete commands[commandName]
		}
	});
	XTemplateRuntime.prototype = {
		constructor: XTemplateRuntime,
		invokeEngine: function(tpl, scope, config) {
			return (new this.constructor(tpl, config)).render(scope, true)
		},
		removeCommand: function(commandName) {
			delete this.config.commands[commandName]
		},
		addCommand: function(commandName, fn) {
			this.config.commands[commandName] = fn
		},
		render: function(data) {
			var root = data;
			if (!(root && root.isScope)) {
				root = new Scope(data)
			}
			return this.tpl(root, S)
		}
	};
	XTemplateRuntime.Scope = Scope;
	return XTemplateRuntime
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:29
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 menu/menu-render
 menu/control
 menu/menuitem-render
 menu/menuitem
 menu/check-menuitem-xtpl
 menu/check-menuitem-render
 menu/check-menuitem
 menu/submenu-xtpl
 menu/submenu-render
 menu/submenu
 menu/popupmenu-render
 menu/popupmenu
 menu
*/

KISSY.add("menu/menu-render", ["component/container"], function(S, require) {
	var Container = require("component/container");
	return Container.getDefaultRender().extend({
		beforeCreateDom: function(renderData) {
			renderData.elAttrs.role = "menu"
		},
		containsElement: function(element) {
			var $el = this.$el;
			return $el && ($el[0] === element || $el.contains(element))
		}
	})
});
KISSY.add("menu/control", ["node", "component/container", "component/extension/delegate-children", "./menu-render"],
	function(S, require) {
		var Node = require("node");
		var Container = require("component/container");
		var DelegateChildrenExtension = require("component/extension/delegate-children");
		var MenuRender = require("./menu-render");
		var KeyCode = Node.KeyCode;
		return Container.extend([DelegateChildrenExtension], {
			isMenu: 1,
			_onSetHighlightedItem: function(v, ev) {
				var highlightedItem;
				if (v && ev && (highlightedItem = ev.prevVal)) {
					highlightedItem.set("highlighted", false, {
						data: {
							byPassSetHighlightedItem: 1
						}
					})
				}
			},
			_onSetVisible: function(v, e) {
				this.callSuper(e);
				var highlightedItem;
				if (!v && (highlightedItem = this.get("highlightedItem"))) {
					highlightedItem.set("highlighted", false)
				}
			},
			bindUI: function() {
				var self = this;
				self.on("afterHighlightedItemChange", afterHighlightedItemChange, self)
			},
			getRootMenu: function() {
				return this
			},
			handleMouseEnterInternal: function(e) {
				this.callSuper(e);
				var rootMenu = this.getRootMenu();
				if (rootMenu && rootMenu._popupAutoHideTimer) {
					clearTimeout(rootMenu._popupAutoHideTimer);
					rootMenu._popupAutoHideTimer = null
				}
			},
			handleBlurInternal: function(e) {
				this.callSuper(e);
				var highlightedItem;
				if (highlightedItem = this.get("highlightedItem")) {
					highlightedItem.set("highlighted", false)
				}
			},
			_getNextEnabledHighlighted: function(index, dir) {
				var children = this.get("children"),
					len = children.length,
					o = index;
				do {
					var c = children[index];
					if (!c.get("disabled") && c.get("visible") !== false) {
						return children[index]
					}
					index = (index + dir + len) % len
				} while (index !== o);
				return undefined
			},
			handleKeyDownInternal: function(e) {
				var self = this;
				var highlightedItem = self.get("highlightedItem");
				if (highlightedItem && highlightedItem.handleKeyDownInternal(e)) {
					return true
				}
				var children = self.get("children"),
					len = children.length;
				if (len === 0) {
					return undefined
				}
				var index, destIndex, nextHighlighted;
				switch (e.keyCode) {
					case KeyCode.ESC:
						if (highlightedItem = self.get("highlightedItem")) {
							highlightedItem.set("highlighted", false)
						}
						break;
					case KeyCode.HOME:
						nextHighlighted = self._getNextEnabledHighlighted(0, 1);
						break;
					case KeyCode.END:
						nextHighlighted = self._getNextEnabledHighlighted(len - 1, -1);
						break;
					case KeyCode.UP:
						if (!highlightedItem) {
							destIndex = len - 1
						} else {
							index = S.indexOf(highlightedItem, children);
							destIndex = (index - 1 + len) % len
						}
						nextHighlighted = self._getNextEnabledHighlighted(destIndex, -1);
						break;
					case KeyCode.DOWN:
						if (!highlightedItem) {
							destIndex = 0
						} else {
							index = S.indexOf(highlightedItem, children);
							destIndex = (index + 1 + len) % len
						}
						nextHighlighted = self._getNextEnabledHighlighted(destIndex, 1);
						break
				}
				if (nextHighlighted) {
					nextHighlighted.set("highlighted", true, {
						data: {
							fromKeyboard: 1
						}
					});
					return true
				} else {
					return undefined
				}
			},
			containsElement: function(element) {
				var self = this;
				if (!self.get("visible") || !self.$el) {
					return false
				}
				if (self.view.containsElement(element)) {
					return true
				}
				var children = self.get("children");
				for (var i = 0, count = children.length; i < count; i++) {
					var child = children[i];
					if (child.containsElement && child.containsElement(element)) {
						return true
					}
				}
				return false
			}
		}, {
			ATTRS: {
				highlightedItem: {
					value: null
				},
				xrender: {
					value: MenuRender
				},
				defaultChildCfg: {
					value: {
						xclass: "menuitem"
					}
				}
			},
			xclass: "menu"
		});

		function afterHighlightedItemChange(e) {
			if (e.target.isMenu) {
				var el = this.el,
					menuItem = e.newVal;
				el.setAttribute("aria-activedescendant", menuItem && menuItem.el.id || "")
			}
		}
	});
KISSY.add("menu/menuitem-render", ["component/control"], function(S, require) {
	var Control = require("component/control");
	return Control.getDefaultRender().extend({
		beforeCreateDom: function(renderData) {
			renderData.elAttrs.role = renderData.selectable ? "menuitemradio" : "menuitem";
			if (renderData.selected) {
				renderData.elCls.push(this.getBaseCssClasses("selected"))
			}
		},
		_onSetSelected: function(v) {
			var self = this,
				cls = self.getBaseCssClasses("selected");
			self.$el[v ? "addClass" : "removeClass"](cls)
		},
		containsElement: function(element) {
			var $el = this.$el;
			return $el && ($el[0] === element || $el.contains(element))
		}
	}, {
		HTML_PARSER: {
			selectable: function(el) {
				return el.hasClass(this.getBaseCssClass("selectable"))
			}
		}
	})
});
KISSY.add("menu/menuitem", ["component/control", "./menuitem-render", "node"], function(S, require) {
	var Control = require("component/control");
	var MenuItemRender = require("./menuitem-render");
	var $ = require("node").all;
	return Control.extend({
		isMenuItem: 1,
		handleClickInternal: function() {
			var self = this;
			self.callSuper();
			if (self.get("selectable")) {
				self.set("selected", true)
			}
			self.fire("click");
			return true
		},
		_onSetHighlighted: function(v, e) {
			var self = this,
				parent = self.get("parent");
			if (!(e && e.byPassSetHighlightedItem)) {
				if (self.get("rendered")) {
					parent.set("highlightedItem", v ? self : null)
				} else {
					if (v) {
						parent.set("highlightedItem", self)
					}
				}
			}
			if (v) {
				var el = self.$el,
					p = el.parent(function(e) {
						return $(e).css("overflow") !== "visible"
					}, parent.get("el").parent());
				if (!p) {
					return
				}
				el.scrollIntoView(p, {
					alignWithTop: true,
					allowHorizontalScroll: true,
					onlyScrollIfNeeded: true
				})
			}
		},
		containsElement: function(element) {
			return this.view.containsElement(element)
		}
	}, {
		ATTRS: {
			focusable: {
				value: false
			},
			handleMouseEvents: {
				value: false
			},
			selectable: {
				view: 1
			},
			value: {},
			selected: {
				view: 1
			},
			xrender: {
				value: MenuItemRender
			}
		},
		xclass: "menuitem"
	})
});
KISSY.add("menu/check-menuitem-xtpl", ["component/extension/content-xtpl"], function(S, require, exports, module) {
	return function(scope, S, undefined) {
		var buffer = "",
			config = this.config,
			engine = this,
			moduleWrap, utils = config.utils;
		if (typeof module !== "undefined" && module.kissy) {
			moduleWrap = module
		}
		var runBlockCommandUtil = utils.runBlockCommand,
			renderOutputUtil = utils.renderOutput,
			getPropertyUtil = utils.getProperty,
			runInlineCommandUtil = utils.runInlineCommand,
			getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
		buffer += '<div class="';
		var config1 = {};
		var params2 = [];
		params2.push("checkbox");
		config1.params = params2;
		var id0 = runInlineCommandUtil(engine, scope, config1, "getBaseCssClasses", 1);
		buffer += renderOutputUtil(id0, true);
		buffer += '">\n</div>\n';
		var config4 = {};
		var params5 = [];
		params5.push("component/extension/content-xtpl");
		config4.params = params5;
		if (moduleWrap) {
			require("component/extension/content-xtpl");
			config4.params[0] = moduleWrap.resolveByName(config4.params[0])
		}
		var id3 = runInlineCommandUtil(engine, scope, config4, "include", 3);
		buffer += renderOutputUtil(id3, false);
		return buffer
	}
});
KISSY.add("menu/check-menuitem-render", ["./menuitem-render", "component/extension/content-render",
	"./check-menuitem-xtpl"
], function(S, require) {
	var MenuItemRender = require("./menuitem-render");
	var ContentRenderExtension = require("component/extension/content-render");
	var CheckMenuItemTpl = require("./check-menuitem-xtpl");
	return MenuItemRender.extend([ContentRenderExtension], {
		beforeCreateDom: function(renderData) {
			if (renderData.checked) {
				renderData.elCls.push(this.getBaseCssClasses("checked"))
			}
		},
		_onSetChecked: function(v) {
			var self = this,
				cls = self.getBaseCssClasses("checked");
			self.$el[v ? "addClass" : "removeClass"](cls)
		}
	}, {
		ATTRS: {
			contentTpl: {
				value: CheckMenuItemTpl
			}
		}
	})
});
KISSY.add("menu/check-menuitem", ["./menuitem", "./check-menuitem-render"], function(S, require) {
	var MenuItem = require("./menuitem");
	var CheckMenuItemRender = require("./check-menuitem-render");
	return MenuItem.extend({
		handleClickInternal: function() {
			var self = this;
			self.callSuper();
			self.set("checked", !self.get("checked"));
			self.fire("click");
			return true
		}
	}, {
		ATTRS: {
			checked: {
				view: 1
			},
			xrender: {
				value: CheckMenuItemRender
			}
		},
		xclass: "check-menuitem"
	})
});
KISSY.add("menu/submenu-xtpl", [], function(S, require, exports, module) {
	return function(scope, S, undefined) {
		var buffer = "",
			config = this.config,
			engine = this,
			moduleWrap, utils = config.utils;
		if (typeof module !== "undefined" && module.kissy) {
			moduleWrap = module
		}
		var runBlockCommandUtil = utils.runBlockCommand,
			renderOutputUtil = utils.renderOutput,
			getPropertyUtil = utils.getProperty,
			runInlineCommandUtil = utils.runInlineCommand,
			getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
		buffer += '<div id="ks-content-';
		var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 1);
		buffer += renderOutputUtil(id0, true);
		buffer += '"\n     class="';
		var config2 = {};
		var params3 = [];
		params3.push("content");
		config2.params = params3;
		var id1 = runInlineCommandUtil(engine, scope, config2, "getBaseCssClasses", 2);
		buffer += renderOutputUtil(id1, true);
		buffer += '">';
		var id4 = getPropertyOrRunCommandUtil(engine, scope, {}, "content", 0, 2);
		buffer += renderOutputUtil(id4, false);
		buffer += '</div>\n<span class="';
		var id5 = getPropertyOrRunCommandUtil(engine, scope, {}, "prefixCls", 0, 3);
		buffer += renderOutputUtil(id5, true);
		buffer += 'submenu-arrow">\u25ba</span>';
		return buffer
	}
});
KISSY.add("menu/submenu-render", ["./submenu-xtpl", "./menuitem-render", "component/extension/content-render"],
	function(S, require) {
		var SubMenuTpl = require("./submenu-xtpl");
		var MenuItemRender = require("./menuitem-render");
		var ContentRenderExtension = require("component/extension/content-render");
		return MenuItemRender.extend([ContentRenderExtension], {
			decorateDom: function(el) {
				var control = this.control,
					prefixCls = control.get("prefixCls");
				var popupMenuEl = el.one("." + prefixCls + "popupmenu");
				var docBody = popupMenuEl[0].ownerDocument.body;
				docBody.insertBefore(popupMenuEl[0], docBody.firstChild);
				var PopupMenuClass = this.getComponentConstructorByNode(prefixCls, popupMenuEl);
				control.setInternal("menu", new PopupMenuClass({
					srcNode: popupMenuEl,
					prefixCls: prefixCls
				}))
			}
		}, {
			ATTRS: {
				contentTpl: {
					value: SubMenuTpl
				}
			}
		})
	});
KISSY.add("menu/submenu", ["node", "./menuitem", "./submenu-render"], function(S, require) {
	var Node = require("node");
	var MenuItem = require("./menuitem");
	var SubMenuRender = require("./submenu-render");
	var KeyCode = Node.KeyCode,
		MENU_DELAY = 0.15;

	function afterHighlightedChange(e) {
		var target = e.target,
			self = this;
		if (target !== self && target.isMenuItem && e.newVal) {
			self.clearHidePopupMenuTimers();
			if (!self.get("highlighted")) {
				self.set("highlighted", true);
				target.set("highlighted", false);
				target.set("highlighted", true)
			}
		}
	}
	return MenuItem.extend({
		isSubMenu: 1,
		clearShowPopupMenuTimers: function() {
			var showTimer;
			if (showTimer = this._showTimer) {
				showTimer.cancel();
				this._showTimer = null
			}
		},
		clearHidePopupMenuTimers: function() {
			var dismissTimer;
			if (dismissTimer = this._dismissTimer) {
				dismissTimer.cancel();
				this._dismissTimer = null
			}
		},
		clearSubMenuTimers: function() {
			this.clearHidePopupMenuTimers();
			this.clearShowPopupMenuTimers()
		},
		bindUI: function() {
			var self = this;
			self.on("afterHighlightedChange", afterHighlightedChange, self)
		},
		handleMouseLeaveInternal: function() {
			var self = this;
			self.set("highlighted", false, {
				data: {
					fromMouse: 1
				}
			});
			self.clearSubMenuTimers();
			var menu = self.get("menu");
			if (menu.get("visible")) {
				self._dismissTimer = S.later(hideMenu, self.get("menuDelay") * 1E3, false, self)
			}
		},
		handleMouseEnterInternal: function() {
			var self = this;
			self.set("highlighted", true, {
				data: {
					fromMouse: 1
				}
			});
			self.clearSubMenuTimers();
			var menu = self.get("menu");
			if (!menu.get("visible")) {
				self._showTimer = S.later(showMenu, self.get("menuDelay") * 1E3, false, self)
			}
		},
		_onSetHighlighted: function(v, e) {
			var self = this;
			if (!e) {
				return
			}
			self.callSuper(e);
			if (e.fromMouse) {
				return
			}
			if (v && !e.fromKeyboard) {
				showMenu.call(self)
			} else {
				if (!v) {
					hideMenu.call(self)
				}
			}
		},
		handleClickInternal: function() {
			var self = this;
			showMenu.call(self);
			self.callSuper()
		},
		handleKeyDownInternal: function(e) {
			var self = this,
				menu = self.get("menu"),
				menuChildren, menuChild, hasKeyboardControl_ = menu.get("visible"),
				keyCode = e.keyCode;
			if (!hasKeyboardControl_) {
				if (keyCode === KeyCode.RIGHT) {
					showMenu.call(self);
					menuChildren = menu.get("children");
					if (menuChild = menuChildren[0]) {
						menuChild.set("highlighted", true, {
							data: {
								fromKeyboard: 1
							}
						})
					}
				} else {
					if (keyCode === KeyCode.ENTER) {
						return self.handleClickInternal(e)
					} else {
						return undefined
					}
				}
			} else {
				if (!menu.handleKeyDownInternal(e)) {
					if (keyCode === KeyCode.LEFT) {
						self.set("highlighted", false);
						self.set("highlighted", true, {
							data: {
								fromKeyboard: 1
							}
						})
					} else {
						return undefined
					}
				}
			}
			return true
		},
		containsElement: function(element) {
			return this.get("menu").containsElement(element)
		},
		destructor: function() {
			var self = this,
				menu = self.get("menu");
			self.clearSubMenuTimers();
			menu.destroy()
		}
	}, {
		ATTRS: {
			menuDelay: {
				value: MENU_DELAY
			},
			menu: {
				value: {},
				getter: function(v) {
					if (!v.isControl) {
						v.xclass = v.xclass || "popupmenu";
						v = this.createComponent(v);
						this.setInternal("menu", v)
					}
					return v
				},
				setter: function(m) {
					if (m.isControl) {
						m.setInternal("parent", this)
					}
				}
			},
			xrender: {
				value: SubMenuRender
			}
		},
		xclass: "submenu"
	});

	function showMenu() {
		var self = this,
			menu = self.get("menu");
		var align = {
			node: this.$el,
			points: ["tr", "tl"],
			overflow: {
				adjustX: 1,
				adjustY: 1
			}
		};
		S.mix(menu.get("align"), align, false);
		menu.show();
		self.el.setAttribute("aria-haspopup", menu.get("el").attr("id"))
	}

	function hideMenu() {
		this.get("menu").hide()
	}
});
KISSY.add("menu/popupmenu-render", ["component/extension/content-render", "./menu-render"], function(S, require) {
	var ContentRenderExtension = require("component/extension/content-render");
	var MenuRender = require("./menu-render");
	return MenuRender.extend([ContentRenderExtension])
});
KISSY.add("menu/popupmenu", ["component/extension/align", "component/extension/shim", "./control", "./popupmenu-render"],
	function(S, require) {
		var AlignExtension = require("component/extension/align");
		var Shim = require("component/extension/shim");
		var Menu = require("./control");
		var PopupMenuRender = require("./popupmenu-render");
		return Menu.extend([Shim, AlignExtension], {
			getRootMenu: function() {
				var cur = this,
					last;
				do {
					last = cur;
					cur = cur.get("parent")
				} while (cur && (cur.isMenuItem || cur.isMenu));
				return last === this ? null : last
			},
			handleMouseLeaveInternal: function(e) {
				this.callSuper(e);
				if (this.get("autoHideOnMouseLeave")) {
					var rootMenu = this.getRootMenu();
					if (rootMenu) {
						clearTimeout(rootMenu._popupAutoHideTimer);
						rootMenu._popupAutoHideTimer = setTimeout(function() {
							var item;
							if (item = rootMenu.get("highlightedItem")) {
								item.set("highlighted", false)
							}
						}, this.get("parent").get("menuDelay") * 1E3)
					}
				}
			},
			isPopupMenu: 1,
			handleBlurInternal: function(e) {
				var self = this;
				self.callSuper(e);
				self.hide()
			}
		}, {
			ATTRS: {
				focusable: {
					value: false
				},
				autoHideOnMouseLeave: {},
				contentEl: {},
				visible: {
					value: false
				},
				xrender: {
					value: PopupMenuRender
				}
			},
			xclass: "popupmenu"
		})
	});
KISSY.add("menu", ["menu/control", "menu/menuitem", "menu/check-menuitem", "menu/submenu", "menu/popupmenu"], function(
	S, require) {
	var Menu = require("menu/control");
	var Item = require("menu/menuitem");
	var CheckItem = require("menu/check-menuitem");
	var SubMenu = require("menu/submenu");
	var PopupMenu = require("menu/popupmenu");
	Menu.Item = Item;
	Menu.CheckItem = CheckItem;
	Menu.SubMenu = SubMenu;
	Menu.PopupMenu = PopupMenu;
	return Menu
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/container/render
 component/container
*/

KISSY.add("component/container/render", ["component/control", "component/manager"], function(S, require) {
	var Control = require("component/control");
	var Manager = require("component/manager");
	return Control.getDefaultRender().extend([], {
		decorateDom: function() {
			var self = this,
				childrenContainerEl = self.getChildrenContainerEl(),
				control = self.control,
				defaultChildCfg = control.get("defaultChildCfg"),
				prefixCls = defaultChildCfg.prefixCls,
				defaultChildXClass = defaultChildCfg.xclass,
				childrenComponents = [],
				children = childrenContainerEl.children();
			children.each(function(c) {
				var ChildUI = self.getComponentConstructorByNode(prefixCls, c) || defaultChildXClass && Manager.getConstructorByXClass(
					defaultChildXClass);
				if (ChildUI) {
					childrenComponents.push(new ChildUI(S.merge(defaultChildCfg, {
						srcNode: c
					})))
				}
			});
			control.set("children", childrenComponents)
		},
		getChildrenContainerEl: function() {
			return this.$el
		}
	}, {
		name: "ContainerRender"
	})
});
KISSY.add("component/container", ["component/control", "./container/render"], function(S, require) {
	var Control = require("component/control");
	var ContainerRender = require("./container/render");

	function defAddChild(e) {
		var self = this;
		if (e.target !== self) {
			return
		}
		var c = e.component,
			children = self.get("children"),
			index = e.index;
		children.splice(index, 0, c);
		children = self.get("children");
		c = children[index];
		c.setInternal("parent", self);
		if (self.get("rendered")) {
			self.renderChild(index)
		}
		self.fire("afterAddChild", {
			component: c,
			index: index
		})
	}

	function defRemoveChild(e) {
		var self = this;
		if (e.target !== self) {
			return
		}
		var c = e.component,
			cDOMParentEl, cDOMEl, destroy = e.destroy,
			children = self.get("children"),
			index = e.index;
		if (index !== -1) {
			children.splice(index, 1)
		}
		c.setInternal("parent", null);
		if (destroy) {
			if (c.destroy) {
				c.destroy()
			}
		} else {
			if (c.get && (cDOMEl = c.el)) {
				if (cDOMParentEl = cDOMEl.parentNode) {
					cDOMParentEl.removeChild(cDOMEl)
				}
			}
		}
		self.fire("afterRemoveChild", {
			component: c,
			index: index
		})
	}
	return Control.extend({
		isContainer: true,
		initializer: function() {
			var self = this,
				prefixCls = self.get("prefixCls"),
				defaultChildCfg = self.get("defaultChildCfg");
			self.publish("beforeAddChild", {
				defaultFn: defAddChild
			});
			self.publish("beforeRemoveChild", {
				defaultFn: defRemoveChild
			});
			defaultChildCfg.prefixCls = defaultChildCfg.prefixCls || prefixCls
		},
		createDom: function() {
			this.createChildren()
		},
		renderUI: function() {
			this.renderChildren()
		},
		renderChildren: function() {
			var i, self = this,
				children = self.get("children");
			for (i = 0; i < children.length; i++) {
				self.renderChild(i)
			}
		},
		createChildren: function() {
			var i, self = this,
				children = self.get("children");
			for (i = 0; i < children.length; i++) {
				self.createChild(i)
			}
		},
		addChild: function(c, index) {
			var self = this,
				children = self.get("children");
			if (index === undefined) {
				index = children.length
			}
			self.fire("beforeAddChild", {
				component: c,
				index: index
			})
		},
		renderChild: function(childIndex) {
			var self = this,
				children = self.get("children");
			self.createChild(childIndex).render();
			self.fire("afterRenderChild", {
				component: children[childIndex],
				index: childIndex
			})
		},
		createChild: function(childIndex) {
			var self = this,
				c, elBefore, domContentEl, children = self.get("children"),
				cEl, contentEl;
			c = children[childIndex];
			contentEl = self.view.getChildrenContainerEl();
			domContentEl = contentEl[0];
			elBefore = domContentEl.children[childIndex] || null;
			if (c.get("rendered")) {
				cEl = c.el;
				if (cEl.parentNode !== domContentEl) {
					domContentEl.insertBefore(cEl, elBefore)
				}
			} else {
				if (elBefore) {
					c.set("elBefore", elBefore)
				} else {
					c.set("render", contentEl)
				}
				c.create()
			}
			self.fire("afterCreateChild", {
				component: c,
				index: childIndex
			});
			return c
		},
		removeChild: function(c, destroy) {
			if (destroy === undefined) {
				destroy = true
			}
			this.fire("beforeRemoveChild", {
				component: c,
				index: S.indexOf(c, this.get("children")),
				destroy: destroy
			})
		},
		removeChildren: function(destroy) {
			var self = this,
				i, t = [].concat(self.get("children"));
			for (i = 0; i < t.length; i++) {
				self.removeChild(t[i], destroy)
			}
			return self
		},
		getChildAt: function(index) {
			var children = this.get("children");
			return children[index] || null
		},
		destructor: function() {
			var i, children = this.get("children");
			for (i = 0; i < children.length; i++) {
				if (children[i].destroy) {
					children[i].destroy()
				}
			}
		}
	}, {
		ATTRS: {
			children: {
				value: [],
				getter: function(v) {
					var defaultChildCfg = null,
						i, c, self = this;
					for (i = 0; i < v.length; i++) {
						c = v[i];
						if (!c.isControl) {
							defaultChildCfg = defaultChildCfg || self.get("defaultChildCfg");
							S.mix(c, defaultChildCfg, false);
							v[i] = this.createComponent(c)
						}
					}
					return v
				},
				setter: function(v) {
					var i, c;
					for (i = 0; i < v.length; i++) {
						c = v[i];
						if (c.isControl) {
							c.setInternal("parent", this)
						}
					}
				}
			},
			defaultChildCfg: {
				value: {}
			},
			xrender: {
				value: ContainerRender
			}
		},
		name: "container"
	})
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/delegate-children
*/

KISSY.add("component/extension/delegate-children", ["node", "component/manager"], function(S, require) {
	var Node = require("node"),
		Manager = require("component/manager");
	var UA = S.UA,
		ie = UA.ieMode,
		Features = S.Features,
		Gesture = Node.Gesture,
		isTouchEventSupported = Features.isTouchEventSupported();

	function onRenderChild(e) {
		if (e.target === this) {
			var child = e.component,
				el = child.$el;
			el.addClass(this.__childClsTag)
		}
	}

	function onRemoveChild(e) {
		if (e.target === this) {
			var child = e.component,
				el = child.$el;
			if (el) {
				el.removeClass(this.__childClsTag)
			}
		}
	}

	function DelegateChildren() {
		var self = this;
		self.__childClsTag = S.guid("ks-component-child");
		self.on("afterRenderChild", onRenderChild, self).on("afterRemoveChild", onRemoveChild, self)
	}
	S.augment(DelegateChildren, {
		handleChildrenEvents: function(e) {
			if (!this.get("disabled")) {
				var control = this.getOwnerControl(e);
				if (control && !control.get("disabled")) {
					e.stopPropagation();
					switch (e.type) {
						case Gesture.start:
							control.handleMouseDown(e);
							break;
						case Gesture.end:
							control.handleMouseUp(e);
							break;
						case Gesture.tap:
							control.handleClick(e);
							break;
						case "mouseenter":
							control.handleMouseEnter(e);
							break;
						case "mouseleave":
							control.handleMouseLeave(e);
							break;
						case "contextmenu":
							control.handleContextMenu(e);
							break;
						case "dblclick":
							control.handleDblClick(e);
							break;
						default:
							S.error(e.type + " unhandled!")
					}
				}
			}
		},
		__bindUI: function() {
			var self = this,
				events = Gesture.start + " " + Gesture.end + " " + Gesture.tap;
			if (Gesture.cancel) {
				events += " " + Gesture.cancel
			}
			events += " mouseenter mouseleave contextmenu " + (ie && ie < 9 ? "dblclick " : "");
			self.$el.delegate(events, "." + self.__childClsTag, self.handleChildrenEvents, self)
		},
		getOwnerControl: function(e) {
			return Manager.getComponent(e.currentTarget.id)
		}
	});
	return DelegateChildren
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/content-render
*/

KISSY.add("component/extension/content-render", ["component/extension/content-xtpl"], function(S, require) {
	var ContentTpl = require("component/extension/content-xtpl");

	function shortcut(self) {
		var control = self.control;
		var contentEl = control.get("contentEl");
		self.$contentEl = control.$contentEl = contentEl;
		self.contentEl = control.contentEl = contentEl[0]
	}

	function ContentRender() {}
	ContentRender.prototype = {
		__beforeCreateDom: function(renderData, childrenElSelectors) {
			S.mix(childrenElSelectors, {
				contentEl: "#ks-content-{id}"
			})
		},
		__createDom: function() {
			shortcut(this)
		},
		__decorateDom: function() {
			shortcut(this)
		},
		getChildrenContainerEl: function() {
			return this.control.get("contentEl")
		},
		_onSetContent: function(v) {
			var control = this.control,
				contentEl = control.$contentEl;
			contentEl.html(v);
			if (!control.get("allowTextSelection")) {
				contentEl.unselectable()
			}
		}
	};
	S.mix(ContentRender, {
		ATTRS: {
			contentTpl: {
				value: ContentTpl
			}
		},
		HTML_PARSER: {
			content: function(el) {
				return el.one("." + this.getBaseCssClass("content")).html()
			},
			contentEl: function(el) {
				return el.one("." + this.getBaseCssClass("content"))
			}
		}
	});
	return ContentRender
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/content-xtpl
*/

KISSY.add("component/extension/content-xtpl", [], function(S, require, exports, module) {
	return function(scope, S, undefined) {
		var buffer = "",
			config = this.config,
			engine = this,
			moduleWrap, utils = config.utils;
		if (typeof module !== "undefined" && module.kissy) {
			moduleWrap = module
		}
		var runBlockCommandUtil = utils.runBlockCommand,
			renderOutputUtil = utils.renderOutput,
			getPropertyUtil = utils.getProperty,
			runInlineCommandUtil = utils.runInlineCommand,
			getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
		buffer += '<div id="ks-content-';
		var id0 = getPropertyOrRunCommandUtil(engine, scope, {}, "id", 0, 1);
		buffer += renderOutputUtil(id0, true);
		buffer += '"\n           class="';
		var config2 = {};
		var params3 = [];
		params3.push("content");
		config2.params = params3;
		var id1 = runInlineCommandUtil(engine, scope, config2, "getBaseCssClasses", 2);
		buffer += renderOutputUtil(id1, true);
		buffer += '">';
		var id4 = getPropertyOrRunCommandUtil(engine, scope, {}, "content", 0, 2);
		buffer += renderOutputUtil(id4, false);
		buffer += "</div>";
		return buffer
	}
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/align
*/

KISSY.add("component/extension/align", ["node"], function(S, require) {
	var Node = require("node");
	var win = S.Env.host,
		$ = Node.all,
		UA = S.UA;

	function getOffsetParent(element) {
		var doc = element.ownerDocument,
			body = doc.body,
			parent, positionStyle = $(element).css("position"),
			skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
		if (!skipStatic) {
			return element.nodeName.toLowerCase() === "html" ? null : element.parentNode
		}
		for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
			positionStyle = $(parent).css("position");
			if (positionStyle !== "static") {
				return parent
			}
		}
		return null
	}

	function getVisibleRectForElement(element) {
		var visibleRect = {
				left: 0,
				right: Infinity,
				top: 0,
				bottom: Infinity
			},
			el, scrollX, scrollY, winSize, doc = element.ownerDocument,
			$win = $(doc).getWindow(),
			body = doc.body,
			documentElement = doc.documentElement;
		for (el = element; el = getOffsetParent(el);) {
			if ((!UA.ie || el.clientWidth !== 0) && el !== body && el !== documentElement && $(el).css("overflow") !==
				"visible") {
				var pos = $(el).offset();
				pos.left += el.clientLeft;
				pos.top += el.clientTop;
				visibleRect.top = Math.max(visibleRect.top, pos.top);
				visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
				visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
				visibleRect.left = Math.max(visibleRect.left, pos.left)
			}
		}
		scrollX = $win.scrollLeft();
		scrollY = $win.scrollTop();
		visibleRect.left = Math.max(visibleRect.left, scrollX);
		visibleRect.top = Math.max(visibleRect.top, scrollY);
		winSize = {
			width: $win.width(),
			height: $win.height()
		};
		visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
		visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
		return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right >
			visibleRect.left ? visibleRect : null
	}

	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
		var xy, diff, p1, p2;
		xy = {
			left: elRegion.left,
			top: elRegion.top
		};
		p1 = getAlignOffset(refNodeRegion, points[0]);
		p2 = getAlignOffset(elRegion, points[1]);
		diff = [p2.left - p1.left, p2.top - p1.top];
		return {
			left: xy.left - diff[0] + +offset[0],
			top: xy.top - diff[1] + +offset[1]
		}
	}

	function isFailX(elFuturePos, elRegion, visibleRect) {
		return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
		return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom
	}

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
		var pos = S.clone(elFuturePos),
			size = {
				width: elRegion.width,
				height: elRegion.height
			};
		if (overflow.adjustX && pos.left < visibleRect.left) {
			pos.left = visibleRect.left
		}
		if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
			size.width -= pos.left + size.width - visibleRect.right
		}
		if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
			pos.left = Math.max(visibleRect.right - size.width, visibleRect.left)
		}
		if (overflow.adjustY && pos.top < visibleRect.top) {
			pos.top = visibleRect.top
		}
		if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
			size.height -= pos.top + size.height - visibleRect.bottom
		}
		if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
			pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top)
		}
		return S.mix(pos, size)
	}

	function flip(points, reg, map) {
		var ret = [];
		S.each(points, function(p) {
			ret.push(p.replace(reg, function(m) {
				return map[m]
			}))
		});
		return ret
	}

	function flipOffset(offset, index) {
		offset[index] = -offset[index];
		return offset
	}

	function Align() {}
	Align.__getOffsetParent = getOffsetParent;
	Align.__getVisibleRectForElement = getVisibleRectForElement;
	Align.ATTRS = {
		align: {
			value: {}
		}
	};

	function getRegion(node) {
		var offset, w, h, domNode = node[0];
		if (!S.isWindow(domNode)) {
			offset = node.offset();
			w = node.outerWidth();
			h = node.outerHeight()
		} else {
			var $win = $(domNode).getWindow();
			offset = {
				left: $win.scrollLeft(),
				top: $win.scrollTop()
			};
			w = $win.width();
			h = $win.height()
		}
		offset.width = w;
		offset.height = h;
		return offset
	}

	function getAlignOffset(region, align) {
		var V = align.charAt(0),
			H = align.charAt(1),
			w = region.width,
			h = region.height,
			x, y;
		x = region.left;
		y = region.top;
		if (V === "c") {
			y += h / 2
		} else {
			if (V === "b") {
				y += h
			}
		}
		if (H === "c") {
			x += w / 2
		} else {
			if (H === "r") {
				x += w
			}
		}
		return {
			left: x,
			top: y
		}
	}

	function beforeVisibleChange(e) {
		if (e.target === this && e.newVal) {
			realign.call(this)
		}
	}

	function onResize() {
		if (this.get("visible")) {
			realign.call(this)
		}
	}

	function realign() {
		this._onSetAlign(this.get("align"))
	}
	Align.prototype = {
		__bindUI: function() {
			var self = this;
			self.on("beforeVisibleChange", beforeVisibleChange, self);
			self.$el.getWindow().on("resize", onResize, self)
		},
		_onSetAlign: function(v) {
			if (v && v.points) {
				this.align(v.node, v.points, v.offset, v.overflow)
			}
		},
		align: function(refNode, points, offset, overflow) {
			refNode = Node.one(refNode || win);
			offset = offset && [].concat(offset) || [0, 0];
			overflow = overflow || {};
			var self = this,
				el = self.$el,
				fail = 0;
			var visibleRect = getVisibleRectForElement(el[0]);
			var elRegion = getRegion(el);
			var refNodeRegion = getRegion(refNode);
			var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
			var newElRegion = S.merge(elRegion, elFuturePos);
			if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
				if (isFailX(elFuturePos, elRegion, visibleRect)) {
					fail = 1;
					points = flip(points, /[lr]/ig, {
						l: "r",
						r: "l"
					});
					offset = flipOffset(offset, 0)
				}
				if (isFailY(elFuturePos, elRegion, visibleRect)) {
					fail = 1;
					points = flip(points, /[tb]/ig, {
						t: "b",
						b: "t"
					});
					offset = flipOffset(offset, 1)
				}
				if (fail) {
					elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
					S.mix(newElRegion, elFuturePos)
				}
				var newOverflowCfg = {};
				newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
				newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
				if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
					newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg)
				}
			}
			self.set({
				x: newElRegion.left,
				y: newElRegion.top
			}, {
				force: 1
			});
			if (newElRegion.width !== elRegion.width) {
				self.set("width", el.width() + newElRegion.width - elRegion.width)
			}
			if (newElRegion.height !== elRegion.height) {
				self.set("height", el.height() + newElRegion.height - elRegion.height)
			}
			return self
		},
		center: function(node) {
			var self = this;
			self.set("align", {
				node: node,
				points: ["cc", "cc"],
				offset: [0, 0]
			});
			return self
		},
		__destructor: function() {
			var self = this;
			if (self.$el) {
				self.$el.getWindow().detach("resize", onResize, self)
			}
		}
	};
	return Align
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:17
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 component/extension/shim
*/

KISSY.add("component/extension/shim", [], function(S) {
	var ie6 = S.UA.ie === 6;
	var shimTpl = "<" + 'iframe style="position: absolute;' + "border: none;" + "width: " + (ie6 ?
			"expression(this.parentNode.clientWidth)" : "100%") + ";" + "top: 0;" + "opacity: 0;" +
		"filter: alpha(opacity=0);" + "left: 0;" + "z-index: -1;" + "height: " + (ie6 ?
			"expression(this.parentNode.clientHeight)" : "100%") + ";" + '"/>';

	function Shim() {}
	Shim.ATTRS = {
		shim: {
			value: ie6
		}
	};
	Shim.prototype.__createDom = function() {
		if (this.get("shim")) {
			this.get("el").prepend(shimTpl)
		}
	};
	return Shim
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: May 22 12:32
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 xtemplate
*/

KISSY.add("xtemplate", ["xtemplate/runtime", "xtemplate/compiler"], function(S, require) {
	var XTemplateRuntime = require("xtemplate/runtime");
	var compiler = require("xtemplate/compiler");
	var cache = XTemplate.cache = {};

	function compile(tpl, config) {
		var fn;
		if (config.cache && (fn = cache[tpl])) {
			return fn
		}
		fn = compiler.compileToFn(tpl, config);
		if (config.cache) {
			cache[tpl] = fn
		}
		return fn
	}
	var defaultCfg = {
		cache: true
	};

	function XTemplate(tpl, config) {
		var self = this;
		config = S.merge(defaultCfg, config);
		if (typeof tpl === "string") {
			tpl = compile(tpl, config)
		}
		XTemplate.superclass.constructor.call(self, tpl, config)
	}
	S.extend(XTemplate, XTemplateRuntime, {}, {
		compiler: compiler,
		Scope: XTemplateRuntime.Scope,
		RunTime: XTemplateRuntime,
		addCommand: XTemplateRuntime.addCommand,
		removeCommand: XTemplateRuntime.removeCommand
	});
	return XTemplate
});

/*
Copyright 2014, KISSY v1.48
MIT Licensed
build time: Aug 28 13:16
*/
/*
 Combined processedModules by KISSY Module Compiler: 

 xtemplate/compiler/parser
 xtemplate/compiler/ast
 xtemplate/compiler
*/

KISSY.add("xtemplate/compiler/parser", [], function() {
	var parser = {},
		S = KISSY,
		GrammarConst = {
			SHIFT_TYPE: 1,
			REDUCE_TYPE: 2,
			ACCEPT_TYPE: 0,
			TYPE_INDEX: 0,
			PRODUCTION_INDEX: 1,
			TO_INDEX: 2
		};
	var Lexer = function(cfg) {
		var self = this;
		self.rules = [];
		S.mix(self, cfg);
		self.resetInput(self.input)
	};
	Lexer.prototype = {
		constructor: function(cfg) {
			var self = this;
			self.rules = [];
			S.mix(self, cfg);
			self.resetInput(self.input)
		},
		resetInput: function(input) {
			S.mix(this, {
				input: input,
				matched: "",
				stateStack: [Lexer.STATIC.INITIAL],
				match: "",
				text: "",
				firstLine: 1,
				lineNumber: 1,
				lastLine: 1,
				firstColumn: 1,
				lastColumn: 1
			})
		},
		genShortId: function(field) {
			var base = 97,
				max = 122,
				interval = max - base + 1;
			field += "__gen";
			var self = this;
			if (!(field in self)) {
				self[field] = -1
			}
			var index = self[field] = self[field] + 1;
			var ret = "";
			do {
				ret = String.fromCharCode(base + index % interval) + ret;
				index = Math.floor(index / interval) - 1
			} while (index >= 0);
			return ret
		},
		getCurrentRules: function() {
			var self = this,
				currentState = self.stateStack[self.stateStack.length - 1],
				rules = [];
			currentState = self.mapState(currentState);
			S.each(self.rules, function(r) {
				var state = r.state || r[3];
				if (!state) {
					if (currentState === Lexer.STATIC.INITIAL) {
						rules.push(r)
					}
				} else {
					if (S.inArray(currentState, state)) {
						rules.push(r)
					}
				}
			});
			return rules
		},
		pushState: function(state) {
			this.stateStack.push(state)
		},
		popState: function() {
			return this.stateStack.pop()
		},
		getStateStack: function() {
			return this.stateStack
		},
		showDebugInfo: function() {
			var self = this,
				DEBUG_CONTEXT_LIMIT = Lexer.STATIC.DEBUG_CONTEXT_LIMIT,
				matched = self.matched,
				match = self.match,
				input = self.input;
			matched = matched.slice(0, matched.length - match.length);
			var past = (matched.length > DEBUG_CONTEXT_LIMIT ? "..." : "") + matched.slice(-DEBUG_CONTEXT_LIMIT).replace(
					/\n/, " "),
				next = match + input;
			next = next.slice(0, DEBUG_CONTEXT_LIMIT) + (next.length > DEBUG_CONTEXT_LIMIT ? "..." : "");
			return past + next + "\n" + (new Array(past.length + 1)).join("-") + "^"
		},
		mapSymbol: function(t) {
			var self = this,
				symbolMap = self.symbolMap;
			if (!symbolMap) {
				return t
			}
			return symbolMap[t] || (symbolMap[t] = self.genShortId("symbol"))
		},
		mapReverseSymbol: function(rs) {
			var self = this,
				symbolMap = self.symbolMap,
				i, reverseSymbolMap = self.reverseSymbolMap;
			if (!reverseSymbolMap && symbolMap) {
				reverseSymbolMap = self.reverseSymbolMap = {};
				for (i in symbolMap) {
					reverseSymbolMap[symbolMap[i]] = i
				}
			}
			if (reverseSymbolMap) {
				return reverseSymbolMap[rs]
			} else {
				return rs
			}
		},
		mapState: function(s) {
			var self = this,
				stateMap = self.stateMap;
			if (!stateMap) {
				return s
			}
			return stateMap[s] || (stateMap[s] = self.genShortId("state"))
		},
		lex: function() {
			var self = this,
				input = self.input,
				i, rule, m, ret, lines, rules = self.getCurrentRules();
			self.match = self.text = "";
			if (!input) {
				return self.mapSymbol(Lexer.STATIC.END_TAG)
			}
			for (i = 0; i < rules.length; i++) {
				rule = rules[i];
				var regexp = rule.regexp || rule[1],
					token = rule.token || rule[0],
					action = rule.action || rule[2] || undefined;
				if (m = input.match(regexp)) {
					lines = m[0].match(/\n.*/g);
					if (lines) {
						self.lineNumber += lines.length
					}
					S.mix(self, {
						firstLine: self.lastLine,
						lastLine: self.lineNumber + 1,
						firstColumn: self.lastColumn,
						lastColumn: lines ? lines[lines.length - 1].length - 1 : self.lastColumn + m[0].length
					});
					var match;
					match = self.match = m[0];
					self.matches = m;
					self.text = match;
					self.matched += match;
					ret = action && action.call(self);
					if (ret === undefined) {
						ret = token
					} else {
						ret = self.mapSymbol(ret)
					}
					input = input.slice(match.length);
					self.input = input;
					if (ret) {
						return ret
					} else {
						return self.lex()
					}
				}
			}
			S.error("lex error at line " + self.lineNumber + ":\n" + self.showDebugInfo());
			return undefined
		}
	};
	Lexer.STATIC = {
		INITIAL: "I",
		DEBUG_CONTEXT_LIMIT: 20,
		END_TAG: "$EOF"
	};
	var lexer = new Lexer({
		rules: [
			[0, /^[\s\S]*?(?={{)/, function() {
				var self = this,
					text = self.text,
					m, n = 0;
				if (m = text.match(/\\+$/)) {
					n = m[0].length
				}
				if (n % 2) {
					self.pushState("et");
					text = text.slice(0, -1)
				} else {
					self.pushState("t")
				}
				if (n) {
					text = text.replace(/\\+$/g, function(m) {
						return (new Array(m.length / 2 + 1)).join("\\")
					})
				}
				self.text = text;
				return "CONTENT"
			}],
			["b", /^[\s\S]+/, 0],
			["b", /^[\s\S]{2,}?(?:(?={{)|$)/, function popState() {
					this.popState()
				},
				["et"]
			],
			["c", /^{{(?:#|@|\^)/, 0, ["t"]],
			["d", /^{{\//, 0, ["t"]],
			["e", /^{{\s*else\s*}}/, function popState() {
					this.popState()
				},
				["t"]
			],
			[0, /^{{![\s\S]*?}}/, function popState() {
					this.popState()
				},
				["t"]
			],
			["b", /^{{%([\s\S]*?)%}}/, function() {
					this.text = this.matches[1] || "";
					this.popState()
				},
				["t"]
			],
			["f", /^{{{?/, 0, ["t"]],
			["g", /^\s+/, 0, ["t"]],
			["h", /^}}}?/, function popState() {
					this.popState()
				},
				["t"]
			],
			["i", /^\(/, 0, ["t"]],
			["j", /^\)/, 0, ["t"]],
			["k", /^\|\|/, 0, ["t"]],
			["l", /^&&/, 0, ["t"]],
			["m", /^===/, 0, ["t"]],
			["n", /^!==/, 0, ["t"]],
			["o", /^>=/, 0, ["t"]],
			["p", /^<=/, 0, ["t"]],
			["q", /^>/, 0, ["t"]],
			["r", /^</, 0, ["t"]],
			["s", /^\+/, 0, ["t"]],
			["t", /^-/, 0, ["t"]],
			["u", /^\*/, 0, ["t"]],
			["v", /^\//, 0, ["t"]],
			["w", /^%/, 0, ["t"]],
			["x", /^!/, 0, ["t"]],
			["y", /^"(\\[\s\S]|[^\\"])*"/, function() {
					this.text = this.text.slice(1, -1).replace(/\\"/g, '"')
				},
				["t"]
			],
			["y", /^'(\\[\s\S]|[^\\'])*'/, function() {
					this.text = this.text.slice(1, -1).replace(/\\'/g, "'")
				},
				["t"]
			],
			["z", /^true/, 0, ["t"]],
			["z", /^false/, 0, ["t"]],
			["aa", /^\d+(?:\.\d+)?(?:e-?\d+)?/i, 0, ["t"]],
			["ab", /^=/, 0, ["t"]],
			["ac", /^\.(?=})/, 0, ["t"]],
			["ac", /^\.\./, function() {
					this.pushState("ws")
				},
				["t"]
			],
			["ad", /^\//, function popState() {
					this.popState()
				},
				["ws"]
			],
			["ad", /^\./, 0, ["t"]],
			["ae", /^\[/, 0, ["t"]],
			["af", /^\]/, 0, ["t"]],
			["ac", /^[a-zA-Z0-9_$]+/, 0, ["t"]],
			["ag", /^./, 0, ["t"]]
		]
	});
	parser.lexer = lexer;
	lexer.symbolMap = {
		$EOF: "a",
		CONTENT: "b",
		OPEN_BLOCK: "c",
		OPEN_CLOSE_BLOCK: "d",
		INVERSE: "e",
		OPEN_TPL: "f",
		SPACE: "g",
		CLOSE: "h",
		LPAREN: "i",
		RPAREN: "j",
		OR: "k",
		AND: "l",
		LOGIC_EQUALS: "m",
		LOGIC_NOT_EQUALS: "n",
		GE: "o",
		LE: "p",
		GT: "q",
		LT: "r",
		PLUS: "s",
		MINUS: "t",
		MULTIPLY: "u",
		DIVIDE: "v",
		MODULUS: "w",
		NOT: "x",
		STRING: "y",
		BOOLEAN: "z",
		NUMBER: "aa",
		EQUALS: "ab",
		ID: "ac",
		SEP: "ad",
		REF_START: "ae",
		REF_END: "af",
		INVALID: "ag",
		$START: "ah",
		program: "ai",
		statements: "aj",
		statement: "ak",
		openBlock: "al",
		closeBlock: "am",
		tpl: "an",
		inBlockTpl: "ao",
		path: "ap",
		inTpl: "aq",
		Expression: "ar",
		params: "as",
		hash: "at",
		param: "au",
		ConditionalOrExpression: "av",
		ConditionalAndExpression: "aw",
		EqualityExpression: "ax",
		RelationalExpression: "ay",
		AdditiveExpression: "az",
		MultiplicativeExpression: "ba",
		UnaryExpression: "bb",
		PrimaryExpression: "bc",
		hashSegments: "bd",
		hashSegment: "be",
		pathSegments: "bf"
	};
	parser.productions = [
		["ah", ["ai"]],
		["ai", ["aj", "e", "aj"], function() {
			return new this.yy.ProgramNode(this.lexer.lineNumber, this.$1, this.$3)
		}],
		["ai", ["aj"], function() {
			return new this.yy.ProgramNode(this.lexer.lineNumber, this.$1)
		}],
		["aj", ["ak"], function() {
			return [this.$1]
		}],
		["aj", ["aj", "ak"], function() {
			this.$1.push(this.$2)
		}],
		["ak", ["al", "ai", "am"], function() {
			return new this.yy.BlockNode(this.lexer.lineNumber, this.$1, this.$2, this.$3)
		}],
		["ak", ["an"]],
		["ak", ["b"], function() {
			return new this.yy.ContentNode(this.lexer.lineNumber, this.$1)
		}],
		["ao", ["ap"], function() {
			return new this.yy.TplNode(this.lexer.lineNumber, this.$1)
		}],
		["ao", ["aq"]],
		["al", ["c", "ao", "h"], function() {
			if (this.$1.charAt(this.$1.length - 1) === "^") {
				this.$2.isInverted = 1
			}
			return this.$2
		}],
		["am", ["d", "ap", "h"], function() {
			return this.$2
		}],
		["an", ["f", "aq", "h"], function() {
			if (this.$1.length === 3) {
				this.$2.escaped = false
			}
			return this.$2
		}],
		["an", ["f", "ar", "h"], function() {
			var tpl = new this.yy.TplExpressionNode(this.lexer.lineNumber, this.$2);
			if (this.$1.length === 3) {
				tpl.escaped = false
			}
			return tpl
		}],
		["aq", ["ap", "g", "as", "g", "at"], function() {
			return new this.yy.TplNode(this.lexer.lineNumber, this.$1, this.$3, this.$5)
		}],
		["aq", ["ap", "g", "as"], function() {
			return new this.yy.TplNode(this.lexer.lineNumber, this.$1, this.$3)
		}],
		["aq", ["ap", "g", "at"], function() {
			return new this.yy.TplNode(this.lexer.lineNumber, this.$1, null, this.$3)
		}],
		["as", ["as", "g", "au"], function() {
			this.$1.push(this.$3)
		}],
		["as", ["au"], function() {
			return [this.$1]
		}],
		["au", ["ar"]],
		["ar", ["av"]],
		["av", ["aw"]],
		["av", ["av", "k", "aw"], function() {
			return new this.yy.ConditionalOrExpression(this.$1, this.$3)
		}],
		["aw", ["ax"]],
		["aw", ["aw", "l", "ax"], function() {
			return new this.yy.ConditionalAndExpression(this.$1, this.$3)
		}],
		["ax", ["ay"]],
		["ax", ["ax", "m", "ay"], function() {
			return new this.yy.EqualityExpression(this.$1, "===", this.$3)
		}],
		["ax", ["ax", "n", "ay"], function() {
			return new this.yy.EqualityExpression(this.$1, "!==", this.$3)
		}],
		["ay", ["az"]],
		["ay", ["ay", "r", "az"], function() {
			return new this.yy.RelationalExpression(this.$1, "<", this.$3)
		}],
		["ay", ["ay", "q", "az"], function() {
			return new this.yy.RelationalExpression(this.$1, ">", this.$3)
		}],
		["ay", ["ay", "p", "az"], function() {
			return new this.yy.RelationalExpression(this.$1, "<=", this.$3)
		}],
		["ay", ["ay", "o", "az"], function() {
			return new this.yy.RelationalExpression(this.$1, ">=", this.$3)
		}],
		["az", ["ba"]],
		["az", ["az", "s", "ba"], function() {
			return new this.yy.AdditiveExpression(this.$1, "+", this.$3)
		}],
		["az", ["az", "t", "ba"], function() {
			return new this.yy.AdditiveExpression(this.$1, "-", this.$3)
		}],
		["ba", ["bb"]],
		["ba", ["ba", "u", "bb"], function() {
			return new this.yy.MultiplicativeExpression(this.$1, "*", this.$3)
		}],
		["ba", ["ba", "v", "bb"], function() {
			return new this.yy.MultiplicativeExpression(this.$1, "/", this.$3)
		}],
		["ba", ["ba", "w", "bb"], function() {
			return new this.yy.MultiplicativeExpression(this.$1, "%", this.$3)
		}],
		["bb", ["x", "bb"], function() {
			return new this.yy.UnaryExpression(this.$1, this.$2)
		}],
		["bb", ["t", "bb"], function() {
			return new this.yy.UnaryExpression(this.$1, this.$2)
		}],
		["bb", ["bc"]],
		["bc", ["y"], function() {
			return new this.yy.StringNode(this.lexer.lineNumber, this.$1)
		}],
		["bc", ["aa"], function() {
			return new this.yy.NumberNode(this.lexer.lineNumber, this.$1)
		}],
		["bc", ["z"], function() {
			return new this.yy.BooleanNode(this.lexer.lineNumber, this.$1)
		}],
		["bc", ["ap"]],
		["bc", ["i", "ar", "j"], function() {
			return this.$2
		}],
		["at", ["bd"], function() {
			return new this.yy.HashNode(this.lexer.lineNumber, this.$1)
		}],
		["bd", ["bd", "g", "be"], function() {
			this.$1.push(this.$3)
		}],
		["bd", ["be"], function() {
			return [this.$1]
		}],
		["be", ["ac", "ab", "ar"], function() {
			return [this.$1, this.$3]
		}],
		["ap", ["bf"], function() {
			return new this.yy.IdNode(this.lexer.lineNumber, this.$1)
		}],
		["bf", ["bf", "ad", "ac"], function() {
			this.$1.push(this.$3)
		}],
		["bf", ["bf", "ae", "ar", "af"], function() {
			this.$1.push(this.$3)
		}],
		["bf", ["bf", "ad", "aa"], function() {
			this.$1.push(this.$3)
		}],
		["bf", ["ac"], function() {
			return [this.$1]
		}]
	];
	parser.table = {
		gotos: {
			"0": {
				ai: 4,
				aj: 5,
				ak: 6,
				al: 7,
				an: 8
			},
			"2": {
				ao: 10,
				aq: 11,
				ap: 12,
				bf: 13
			},
			"3": {
				aq: 20,
				ar: 21,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 30,
				bf: 13
			},
			"5": {
				ak: 32,
				al: 7,
				an: 8
			},
			"7": {
				ai: 33,
				aj: 5,
				ak: 6,
				al: 7,
				an: 8
			},
			"14": {
				ar: 38,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"15": {
				bb: 40,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"16": {
				bb: 41,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"31": {
				aj: 57,
				ak: 6,
				al: 7,
				an: 8
			},
			"33": {
				am: 59
			},
			"35": {
				as: 61,
				au: 62,
				ar: 63,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				at: 64,
				bd: 65,
				be: 66,
				ap: 39,
				bf: 13
			},
			"37": {
				ar: 69,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"44": {
				aw: 71,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"45": {
				ax: 72,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"46": {
				ay: 73,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"47": {
				ay: 74,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"48": {
				az: 75,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"49": {
				az: 76,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"50": {
				az: 77,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"51": {
				az: 78,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"52": {
				ba: 79,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"53": {
				ba: 80,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"54": {
				bb: 81,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"55": {
				bb: 82,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"56": {
				bb: 83,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"57": {
				ak: 32,
				al: 7,
				an: 8
			},
			"58": {
				ap: 84,
				bf: 13
			},
			"85": {
				ar: 90,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				ap: 39,
				bf: 13
			},
			"86": {
				au: 91,
				ar: 63,
				av: 22,
				aw: 23,
				ax: 24,
				ay: 25,
				az: 26,
				ba: 27,
				bb: 28,
				bc: 29,
				at: 92,
				bd: 65,
				be: 66,
				ap: 39,
				bf: 13
			},
			"87": {
				be: 94
			}
		},
		action: {
			"0": {
				b: [1, undefined, 1],
				c: [1, undefined, 2],
				f: [1, undefined, 3]
			},
			"1": {
				a: [2, 7],
				e: [2, 7],
				c: [2, 7],
				f: [2, 7],
				b: [2, 7],
				d: [2, 7]
			},
			"2": {
				ac: [1, undefined, 9]
			},
			"3": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"4": {
				a: [0]
			},
			"5": {
				a: [2, 2],
				d: [2, 2],
				b: [1, undefined, 1],
				c: [1, undefined, 2],
				e: [1, undefined, 31],
				f: [1, undefined, 3]
			},
			"6": {
				a: [2, 3],
				e: [2, 3],
				c: [2, 3],
				f: [2, 3],
				b: [2, 3],
				d: [2, 3]
			},
			"7": {
				b: [1, undefined, 1],
				c: [1, undefined, 2],
				f: [1, undefined, 3]
			},
			"8": {
				a: [2, 6],
				e: [2, 6],
				c: [2, 6],
				f: [2, 6],
				b: [2, 6],
				d: [2, 6]
			},
			"9": {
				h: [2, 56],
				g: [2, 56],
				ad: [2, 56],
				ae: [2, 56],
				k: [2, 56],
				l: [2, 56],
				m: [2, 56],
				n: [2, 56],
				o: [2, 56],
				p: [2, 56],
				q: [2, 56],
				r: [2, 56],
				s: [2, 56],
				t: [2, 56],
				u: [2, 56],
				v: [2, 56],
				w: [2, 56],
				j: [2, 56],
				af: [2, 56]
			},
			"10": {
				h: [1, undefined, 34]
			},
			"11": {
				h: [2, 9]
			},
			"12": {
				h: [2, 8],
				g: [1, undefined, 35]
			},
			"13": {
				h: [2,
					52
				],
				g: [2, 52],
				k: [2, 52],
				l: [2, 52],
				m: [2, 52],
				n: [2, 52],
				o: [2, 52],
				p: [2, 52],
				q: [2, 52],
				r: [2, 52],
				s: [2, 52],
				t: [2, 52],
				u: [2, 52],
				v: [2, 52],
				w: [2, 52],
				j: [2, 52],
				af: [2, 52],
				ad: [1, undefined, 36],
				ae: [1, undefined, 37]
			},
			"14": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"15": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined,
					18
				],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"16": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"17": {
				h: [2, 43],
				k: [2, 43],
				l: [2, 43],
				m: [2, 43],
				n: [2, 43],
				o: [2, 43],
				p: [2, 43],
				q: [2, 43],
				r: [2, 43],
				s: [2, 43],
				t: [2, 43],
				u: [2, 43],
				v: [2, 43],
				w: [2, 43],
				j: [2, 43],
				g: [2, 43],
				af: [2, 43]
			},
			"18": {
				h: [2, 45],
				k: [2, 45],
				l: [2, 45],
				m: [2, 45],
				n: [2, 45],
				o: [2, 45],
				p: [2, 45],
				q: [2, 45],
				r: [2, 45],
				s: [2, 45],
				t: [2, 45],
				u: [2, 45],
				v: [2, 45],
				w: [2, 45],
				j: [2, 45],
				g: [2, 45],
				af: [2, 45]
			},
			"19": {
				h: [2, 44],
				k: [2, 44],
				l: [2, 44],
				m: [2, 44],
				n: [2, 44],
				o: [2, 44],
				p: [2, 44],
				q: [2, 44],
				r: [2, 44],
				s: [2, 44],
				t: [2, 44],
				u: [2, 44],
				v: [2, 44],
				w: [2, 44],
				j: [2, 44],
				g: [2, 44],
				af: [2, 44]
			},
			"20": {
				h: [1, undefined, 42]
			},
			"21": {
				h: [1, undefined, 43]
			},
			"22": {
				h: [2, 20],
				j: [2, 20],
				g: [2, 20],
				af: [2, 20],
				k: [1, undefined, 44]
			},
			"23": {
				h: [2, 21],
				k: [2, 21],
				j: [2, 21],
				g: [2, 21],
				af: [2, 21],
				l: [1, undefined,
					45
				]
			},
			"24": {
				h: [2, 23],
				k: [2, 23],
				l: [2, 23],
				j: [2, 23],
				g: [2, 23],
				af: [2, 23],
				m: [1, undefined, 46],
				n: [1, undefined, 47]
			},
			"25": {
				h: [2, 25],
				k: [2, 25],
				l: [2, 25],
				m: [2, 25],
				n: [2, 25],
				j: [2, 25],
				g: [2, 25],
				af: [2, 25],
				o: [1, undefined, 48],
				p: [1, undefined, 49],
				q: [1, undefined, 50],
				r: [1, undefined, 51]
			},
			"26": {
				h: [2, 28],
				k: [2, 28],
				l: [2, 28],
				m: [2, 28],
				n: [2, 28],
				o: [2, 28],
				p: [2, 28],
				q: [2, 28],
				r: [2, 28],
				j: [2, 28],
				g: [2, 28],
				af: [2, 28],
				s: [1, undefined, 52],
				t: [1, undefined, 53]
			},
			"27": {
				h: [2,
					33
				],
				k: [2, 33],
				l: [2, 33],
				m: [2, 33],
				n: [2, 33],
				o: [2, 33],
				p: [2, 33],
				q: [2, 33],
				r: [2, 33],
				s: [2, 33],
				t: [2, 33],
				j: [2, 33],
				g: [2, 33],
				af: [2, 33],
				u: [1, undefined, 54],
				v: [1, undefined, 55],
				w: [1, undefined, 56]
			},
			"28": {
				h: [2, 36],
				k: [2, 36],
				l: [2, 36],
				m: [2, 36],
				n: [2, 36],
				o: [2, 36],
				p: [2, 36],
				q: [2, 36],
				r: [2, 36],
				s: [2, 36],
				t: [2, 36],
				u: [2, 36],
				v: [2, 36],
				w: [2, 36],
				j: [2, 36],
				g: [2, 36],
				af: [2, 36]
			},
			"29": {
				h: [2, 42],
				k: [2, 42],
				l: [2, 42],
				m: [2, 42],
				n: [2, 42],
				o: [2, 42],
				p: [2, 42],
				q: [2,
					42
				],
				r: [2, 42],
				s: [2, 42],
				t: [2, 42],
				u: [2, 42],
				v: [2, 42],
				w: [2, 42],
				j: [2, 42],
				g: [2, 42],
				af: [2, 42]
			},
			"30": {
				h: [2, 46],
				k: [2, 46],
				l: [2, 46],
				m: [2, 46],
				n: [2, 46],
				o: [2, 46],
				p: [2, 46],
				q: [2, 46],
				r: [2, 46],
				s: [2, 46],
				t: [2, 46],
				u: [2, 46],
				v: [2, 46],
				w: [2, 46],
				g: [1, undefined, 35]
			},
			"31": {
				b: [1, undefined, 1],
				c: [1, undefined, 2],
				f: [1, undefined, 3]
			},
			"32": {
				a: [2, 4],
				e: [2, 4],
				c: [2, 4],
				f: [2, 4],
				b: [2, 4],
				d: [2, 4]
			},
			"33": {
				d: [1, undefined, 58]
			},
			"34": {
				c: [2, 10],
				f: [2, 10],
				b: [2, 10]
			},
			"35": {
				i: [1,
					undefined, 14
				],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 60]
			},
			"36": {
				aa: [1, undefined, 67],
				ac: [1, undefined, 68]
			},
			"37": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"38": {
				j: [1, undefined, 70]
			},
			"39": {
				j: [2, 46],
				k: [2, 46],
				l: [2, 46],
				m: [2, 46],
				n: [2, 46],
				o: [2, 46],
				p: [2, 46],
				q: [2, 46],
				r: [2, 46],
				s: [2, 46],
				t: [2, 46],
				u: [2, 46],
				v: [2, 46],
				w: [2, 46],
				h: [2, 46],
				g: [2, 46],
				af: [2, 46]
			},
			"40": {
				h: [2, 41],
				k: [2, 41],
				l: [2, 41],
				m: [2, 41],
				n: [2, 41],
				o: [2, 41],
				p: [2, 41],
				q: [2, 41],
				r: [2, 41],
				s: [2, 41],
				t: [2, 41],
				u: [2, 41],
				v: [2, 41],
				w: [2, 41],
				j: [2, 41],
				g: [2, 41],
				af: [2, 41]
			},
			"41": {
				h: [2, 40],
				k: [2, 40],
				l: [2, 40],
				m: [2, 40],
				n: [2, 40],
				o: [2, 40],
				p: [2, 40],
				q: [2, 40],
				r: [2, 40],
				s: [2, 40],
				t: [2, 40],
				u: [2, 40],
				v: [2, 40],
				w: [2, 40],
				j: [2, 40],
				g: [2, 40],
				af: [2, 40]
			},
			"42": {
				a: [2, 12],
				e: [2,
					12
				],
				c: [2, 12],
				f: [2, 12],
				b: [2, 12],
				d: [2, 12]
			},
			"43": {
				a: [2, 13],
				e: [2, 13],
				c: [2, 13],
				f: [2, 13],
				b: [2, 13],
				d: [2, 13]
			},
			"44": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"45": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"46": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1,
					undefined, 16
				],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"47": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"48": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"49": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"50": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"51": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"52": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined,
					17
				],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"53": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"54": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"55": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined,
					18
				],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"56": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"57": {
				a: [2, 1],
				d: [2, 1],
				b: [1, undefined, 1],
				c: [1, undefined, 2],
				f: [1, undefined, 3]
			},
			"58": {
				ac: [1, undefined, 9]
			},
			"59": {
				a: [2, 5],
				e: [2, 5],
				c: [2, 5],
				f: [2, 5],
				b: [2, 5],
				d: [2, 5]
			},
			"60": {
				h: [2, 56],
				g: [2, 56],
				k: [2, 56],
				l: [2, 56],
				m: [2, 56],
				n: [2, 56],
				o: [2, 56],
				p: [2, 56],
				q: [2,
					56
				],
				r: [2, 56],
				s: [2, 56],
				t: [2, 56],
				u: [2, 56],
				v: [2, 56],
				w: [2, 56],
				ad: [2, 56],
				ae: [2, 56],
				ab: [1, undefined, 85]
			},
			"61": {
				h: [2, 15],
				g: [1, undefined, 86]
			},
			"62": {
				h: [2, 18],
				g: [2, 18]
			},
			"63": {
				h: [2, 19],
				g: [2, 19]
			},
			"64": {
				h: [2, 16]
			},
			"65": {
				h: [2, 48],
				g: [1, undefined, 87]
			},
			"66": {
				h: [2, 50],
				g: [2, 50]
			},
			"67": {
				h: [2, 55],
				g: [2, 55],
				ad: [2, 55],
				ae: [2, 55],
				k: [2, 55],
				l: [2, 55],
				m: [2, 55],
				n: [2, 55],
				o: [2, 55],
				p: [2, 55],
				q: [2, 55],
				r: [2, 55],
				s: [2, 55],
				t: [2, 55],
				u: [2, 55],
				v: [2, 55],
				w: [2, 55],
				j: [2, 55],
				af: [2, 55]
			},
			"68": {
				h: [2, 53],
				g: [2, 53],
				ad: [2, 53],
				ae: [2, 53],
				k: [2, 53],
				l: [2, 53],
				m: [2, 53],
				n: [2, 53],
				o: [2, 53],
				p: [2, 53],
				q: [2, 53],
				r: [2, 53],
				s: [2, 53],
				t: [2, 53],
				u: [2, 53],
				v: [2, 53],
				w: [2, 53],
				j: [2, 53],
				af: [2, 53]
			},
			"69": {
				af: [1, undefined, 88]
			},
			"70": {
				h: [2, 47],
				k: [2, 47],
				l: [2, 47],
				m: [2, 47],
				n: [2, 47],
				o: [2, 47],
				p: [2, 47],
				q: [2, 47],
				r: [2, 47],
				s: [2, 47],
				t: [2, 47],
				u: [2, 47],
				v: [2, 47],
				w: [2, 47],
				j: [2, 47],
				g: [2, 47],
				af: [2, 47]
			},
			"71": {
				h: [2, 22],
				k: [2, 22],
				j: [2,
					22
				],
				g: [2, 22],
				af: [2, 22],
				l: [1, undefined, 45]
			},
			"72": {
				h: [2, 24],
				k: [2, 24],
				l: [2, 24],
				j: [2, 24],
				g: [2, 24],
				af: [2, 24],
				m: [1, undefined, 46],
				n: [1, undefined, 47]
			},
			"73": {
				h: [2, 26],
				k: [2, 26],
				l: [2, 26],
				m: [2, 26],
				n: [2, 26],
				j: [2, 26],
				g: [2, 26],
				af: [2, 26],
				o: [1, undefined, 48],
				p: [1, undefined, 49],
				q: [1, undefined, 50],
				r: [1, undefined, 51]
			},
			"74": {
				h: [2, 27],
				k: [2, 27],
				l: [2, 27],
				m: [2, 27],
				n: [2, 27],
				j: [2, 27],
				g: [2, 27],
				af: [2, 27],
				o: [1, undefined, 48],
				p: [1, undefined, 49],
				q: [1, undefined,
					50
				],
				r: [1, undefined, 51]
			},
			"75": {
				h: [2, 32],
				k: [2, 32],
				l: [2, 32],
				m: [2, 32],
				n: [2, 32],
				o: [2, 32],
				p: [2, 32],
				q: [2, 32],
				r: [2, 32],
				j: [2, 32],
				g: [2, 32],
				af: [2, 32],
				s: [1, undefined, 52],
				t: [1, undefined, 53]
			},
			"76": {
				h: [2, 31],
				k: [2, 31],
				l: [2, 31],
				m: [2, 31],
				n: [2, 31],
				o: [2, 31],
				p: [2, 31],
				q: [2, 31],
				r: [2, 31],
				j: [2, 31],
				g: [2, 31],
				af: [2, 31],
				s: [1, undefined, 52],
				t: [1, undefined, 53]
			},
			"77": {
				h: [2, 30],
				k: [2, 30],
				l: [2, 30],
				m: [2, 30],
				n: [2, 30],
				o: [2, 30],
				p: [2, 30],
				q: [2, 30],
				r: [2, 30],
				j: [2, 30],
				g: [2, 30],
				af: [2, 30],
				s: [1, undefined, 52],
				t: [1, undefined, 53]
			},
			"78": {
				h: [2, 29],
				k: [2, 29],
				l: [2, 29],
				m: [2, 29],
				n: [2, 29],
				o: [2, 29],
				p: [2, 29],
				q: [2, 29],
				r: [2, 29],
				j: [2, 29],
				g: [2, 29],
				af: [2, 29],
				s: [1, undefined, 52],
				t: [1, undefined, 53]
			},
			"79": {
				h: [2, 34],
				k: [2, 34],
				l: [2, 34],
				m: [2, 34],
				n: [2, 34],
				o: [2, 34],
				p: [2, 34],
				q: [2, 34],
				r: [2, 34],
				s: [2, 34],
				t: [2, 34],
				j: [2, 34],
				g: [2, 34],
				af: [2, 34],
				u: [1, undefined, 54],
				v: [1, undefined, 55],
				w: [1, undefined, 56]
			},
			"80": {
				h: [2,
					35
				],
				k: [2, 35],
				l: [2, 35],
				m: [2, 35],
				n: [2, 35],
				o: [2, 35],
				p: [2, 35],
				q: [2, 35],
				r: [2, 35],
				s: [2, 35],
				t: [2, 35],
				j: [2, 35],
				g: [2, 35],
				af: [2, 35],
				u: [1, undefined, 54],
				v: [1, undefined, 55],
				w: [1, undefined, 56]
			},
			"81": {
				h: [2, 37],
				k: [2, 37],
				l: [2, 37],
				m: [2, 37],
				n: [2, 37],
				o: [2, 37],
				p: [2, 37],
				q: [2, 37],
				r: [2, 37],
				s: [2, 37],
				t: [2, 37],
				u: [2, 37],
				v: [2, 37],
				w: [2, 37],
				j: [2, 37],
				g: [2, 37],
				af: [2, 37]
			},
			"82": {
				h: [2, 38],
				k: [2, 38],
				l: [2, 38],
				m: [2, 38],
				n: [2, 38],
				o: [2, 38],
				p: [2, 38],
				q: [2,
					38
				],
				r: [2, 38],
				s: [2, 38],
				t: [2, 38],
				u: [2, 38],
				v: [2, 38],
				w: [2, 38],
				j: [2, 38],
				g: [2, 38],
				af: [2, 38]
			},
			"83": {
				h: [2, 39],
				k: [2, 39],
				l: [2, 39],
				m: [2, 39],
				n: [2, 39],
				o: [2, 39],
				p: [2, 39],
				q: [2, 39],
				r: [2, 39],
				s: [2, 39],
				t: [2, 39],
				u: [2, 39],
				v: [2, 39],
				w: [2, 39],
				j: [2, 39],
				g: [2, 39],
				af: [2, 39]
			},
			"84": {
				h: [1, undefined, 89]
			},
			"85": {
				i: [1, undefined, 14],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 9]
			},
			"86": {
				i: [1,
					undefined, 14
				],
				t: [1, undefined, 15],
				x: [1, undefined, 16],
				y: [1, undefined, 17],
				z: [1, undefined, 18],
				aa: [1, undefined, 19],
				ac: [1, undefined, 60]
			},
			"87": {
				ac: [1, undefined, 93]
			},
			"88": {
				h: [2, 54],
				g: [2, 54],
				ad: [2, 54],
				ae: [2, 54],
				k: [2, 54],
				l: [2, 54],
				m: [2, 54],
				n: [2, 54],
				o: [2, 54],
				p: [2, 54],
				q: [2, 54],
				r: [2, 54],
				s: [2, 54],
				t: [2, 54],
				u: [2, 54],
				v: [2, 54],
				w: [2, 54],
				j: [2, 54],
				af: [2, 54]
			},
			"89": {
				a: [2, 11],
				e: [2, 11],
				c: [2, 11],
				f: [2, 11],
				b: [2, 11],
				d: [2, 11]
			},
			"90": {
				h: [2, 51],
				g: [2, 51]
			},
			"91": {
				h: [2, 17],
				g: [2, 17]
			},
			"92": {
				h: [2, 14]
			},
			"93": {
				ab: [1, undefined, 85]
			},
			"94": {
				h: [2, 49],
				g: [2, 49]
			}
		}
	};
	parser.parse = function parse(input) {
		var self = this,
			lexer = self.lexer,
			state, symbol, action, table = self.table,
			gotos = table.gotos,
			tableAction = table.action,
			productions = self.productions,
			valueStack = [null],
			stack = [0];
		lexer.resetInput(input);
		while (1) {
			state = stack[stack.length - 1];
			if (!symbol) {
				symbol = lexer.lex()
			}
			if (!symbol) {
				S.log("it is not a valid input: " + input, "error");
				return false
			}
			action = tableAction[state] && tableAction[state][symbol];
			if (!action) {
				var expected = [],
					error;
				if (tableAction[state]) {
					for (var symbolForState in tableAction[state]) {
						expected.push(self.lexer.mapReverseSymbol(symbolForState))
					}
				}
				error = "Syntax error at line " + lexer.lineNumber + ":\n" + lexer.showDebugInfo() + "\n" + "expect " + expected
					.join(", ");
				S.error(error);
				return false
			}
			switch (action[GrammarConst.TYPE_INDEX]) {
				case GrammarConst.SHIFT_TYPE:
					stack.push(symbol);
					valueStack.push(lexer.text);
					stack.push(action[GrammarConst.TO_INDEX]);
					symbol = null;
					break;
				case GrammarConst.REDUCE_TYPE:
					var production = productions[action[GrammarConst.PRODUCTION_INDEX]],
						reducedSymbol = production.symbol || production[0],
						reducedAction = production.action || production[2],
						reducedRhs = production.rhs || production[1],
						len = reducedRhs.length,
						i = 0,
						ret, $$ = valueStack[valueStack.length - len];
					ret = undefined;
					self.$$ = $$;
					for (; i < len; i++) {
						self["$" + (len - i)] = valueStack[valueStack.length - 1 - i]
					}
					if (reducedAction) {
						ret = reducedAction.call(self)
					}
					if (ret !== undefined) {
						$$ = ret
					} else {
						$$ = self.$$
					}
					if (len) {
						stack = stack.slice(0, -1 * len * 2);
						valueStack = valueStack.slice(0, -1 * len)
					}
					stack.push(reducedSymbol);
					valueStack.push($$);
					var newState = gotos[stack[stack.length - 2]][stack[stack.length - 1]];
					stack.push(newState);
					break;
				case GrammarConst.ACCEPT_TYPE:
					return $$
			}
		}
		return undefined
	};
	return parser
});
KISSY.add("xtemplate/compiler/ast", [], function(S) {
	var ast = {};
	ast.ProgramNode = function(lineNumber, statements, inverse) {
		var self = this;
		self.lineNumber = lineNumber;
		self.statements = statements;
		self.inverse = inverse
	};
	ast.ProgramNode.prototype.type = "program";
	ast.BlockNode = function(lineNumber, tpl, program, close) {
		var closeParts = close.parts,
			self = this,
			e;
		if (!S.equals(tpl.path.parts, closeParts)) {
			e = "Syntax error at line " + lineNumber + ":\n" + "expect {{/" + tpl.path.parts + "}} not {{/" + closeParts +
				"}}";
			S.error(e)
		}
		self.lineNumber = lineNumber;
		self.tpl = tpl;
		self.program = program
	};
	ast.BlockNode.prototype.type = "block";
	ast.TplNode = function(lineNumber, path, params, hash) {
		var self = this;
		self.lineNumber = lineNumber;
		self.path = path;
		self.params = params;
		self.hash = hash;
		self.escaped = true;
		self.isInverted = false
	};
	ast.TplNode.prototype.type = "tpl";
	ast.TplExpressionNode = function(lineNumber, expression) {
		var self = this;
		self.lineNumber = lineNumber;
		self.expression = expression;
		self.escaped = true
	};
	ast.TplExpressionNode.prototype.type = "tplExpression";
	ast.ContentNode = function(lineNumber, value) {
		var self = this;
		self.lineNumber = lineNumber;
		self.value = value
	};
	ast.ContentNode.prototype.type = "content";
	ast.UnaryExpression = function(unaryType, v) {
		this.value = v;
		this.unaryType = unaryType
	};
	ast.UnaryExpression.prototype.type = "unaryExpression";
	ast.MultiplicativeExpression = function(op1, opType, op2) {
		var self = this;
		self.op1 = op1;
		self.opType = opType;
		self.op2 = op2
	};
	ast.MultiplicativeExpression.prototype.type = "multiplicativeExpression";
	ast.AdditiveExpression = function(op1, opType, op2) {
		var self = this;
		self.op1 = op1;
		self.opType = opType;
		self.op2 = op2
	};
	ast.AdditiveExpression.prototype.type = "additiveExpression";
	ast.RelationalExpression = function(op1, opType, op2) {
		var self = this;
		self.op1 = op1;
		self.opType = opType;
		self.op2 = op2
	};
	ast.RelationalExpression.prototype.type = "relationalExpression";
	ast.EqualityExpression = function(op1, opType, op2) {
		var self = this;
		self.op1 = op1;
		self.opType = opType;
		self.op2 = op2
	};
	ast.EqualityExpression.prototype.type = "equalityExpression";
	ast.ConditionalAndExpression = function(op1, op2) {
		var self = this;
		self.op1 = op1;
		self.op2 = op2
	};
	ast.ConditionalAndExpression.prototype.type = "conditionalAndExpression";
	ast.ConditionalOrExpression = function(op1, op2) {
		var self = this;
		self.op1 = op1;
		self.op2 = op2
	};
	ast.ConditionalOrExpression.prototype.type = "conditionalOrExpression";
	ast.StringNode = function(lineNumber, value) {
		var self = this;
		self.lineNumber = lineNumber;
		self.value = value
	};
	ast.StringNode.prototype.type = "string";
	ast.NumberNode = function(lineNumber, value) {
		var self = this;
		self.lineNumber = lineNumber;
		self.value = value
	};
	ast.NumberNode.prototype.type = "number";
	ast.BooleanNode = function(lineNumber, value) {
		var self = this;
		self.lineNumber = lineNumber;
		self.value = value
	};
	ast.BooleanNode.prototype.type = "boolean";
	ast.HashNode = function(lineNumber, raw) {
		var self = this,
			value = {};
		self.lineNumber = lineNumber;
		S.each(raw, function(r) {
			value[r[0]] = r[1]
		});
		self.value = value
	};
	ast.HashNode.prototype.type = "hash";
	ast.IdNode = function(lineNumber, raw) {
		var self = this,
			parts = [],
			depth = 0;
		self.lineNumber = lineNumber;
		S.each(raw, function(p) {
			if (p === "..") {
				depth++
			} else {
				parts.push(p)
			}
		});
		self.parts = parts;
		self.string = parts.join(".");
		self.depth = depth
	};
	ast.IdNode.prototype.type = "id";
	return ast
});
KISSY.add("xtemplate/compiler", ["xtemplate/runtime", "./compiler/parser", "./compiler/ast"], function(S, require) {
	var XTemplateRuntime = require("xtemplate/runtime");
	var parser = require("./compiler/parser");
	parser.yy = require("./compiler/ast");
	var doubleReg = /\\*"/g,
		singleReg = /\\*'/g,
		arrayPush = [].push,
		variableId = 0,
		xtemplateId = 0;

	function guid(str) {
		return str + variableId++
	}

	function escapeString(str, isCode) {
		if (isCode) {
			str = escapeSingleQuoteInCodeString(str, false)
		} else {
			str = str.replace(/\\/g, "\\\\").replace(/'/g, "\\'")
		}
		str = str.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t");
		return str
	}

	function escapeSingleQuoteInCodeString(str, isDouble) {
		return str.replace(isDouble ? doubleReg : singleReg, function(m) {
			if (m.length % 2) {
				m = "\\" + m
			}
			return m
		})
	}

	function pushToArray(to, from) {
		arrayPush.apply(to, from)
	}

	function lastOfArray(arr) {
		return arr[arr.length - 1]
	}
	var gen = {
		genFunction: function(statements, global) {
			var source = [];
			if (!global) {
				source.push("function(scope) {")
			}
			source.push('var buffer = ""' + (global ? "," : ";"));
			if (global) {
				source.push("config = this.config," + "engine = this," + "moduleWrap, " + "utils = config.utils;");
				source.push('if (typeof module !== "undefined" && module.kissy) {' + "moduleWrap = module;" + "}");
				var natives = "",
					c, utils = XTemplateRuntime.utils;
				for (c in utils) {
					natives += c + "Util = utils." + c + ","
				}
				if (natives) {
					source.push("var " + natives.slice(0, natives.length - 1) + ";")
				}
			}
			if (statements) {
				for (var i = 0, len = statements.length; i < len; i++) {
					pushToArray(source, this[statements[i].type](statements[i]))
				}
			}
			source.push("return buffer;");
			if (!global) {
				source.push("}");
				return source
			} else {
				return {
					params: ["scope", "S", "undefined"],
					source: source
				}
			}
		},
		genIdOrInlineCommand: function(idNode, tplNode) {
			var source = [],
				depth = idNode.depth,
				configName, idParts = idNode.parts,
				idName = guid("id"),
				self = this;
			if (depth === 0) {
				var configNameCode = tplNode && self.genConfig(tplNode);
				if (configNameCode) {
					configName = configNameCode[0];
					pushToArray(source, configNameCode[1])
				}
			}
			var idString = self.getIdStringFromIdParts(source, idParts);
			if (depth || S.startsWith(idString, "this.")) {
				source.push("var " + idName + " = getPropertyUtil(engine,scope" + ',"' + idString + '",' + depth + "," + idNode
					.lineNumber + ");")
			} else {
				if (configName) {
					if (idString === "include") {
						source.push("if(moduleWrap) {re" + 'quire("' + tplNode.params[0].value + '");' + configName +
							".params[0] = moduleWrap.resolveByName(" + configName + ".params[0]);" + "}")
					}
					source.push("var " + idName + " = runInlineCommandUtil(engine,scope," + configName + ',"' + idString + '",' +
						idNode.lineNumber + ");")
				} else {
					source.push("var " + idName + " = getPropertyOrRunCommandUtil(engine,scope," + (configName || "{}") + ',"' +
						idString + '",' + depth + "," + idNode.lineNumber + ");")
				}
			}
			return [idName, source]
		},
		genOpExpression: function(e, type) {
			var source = [],
				name1, name2, code1 = this[e.op1.type](e.op1),
				code2 = this[e.op2.type](e.op2);
			name1 = code1[0];
			name2 = code2[0];
			if (name1 && name2) {
				pushToArray(source, code1[1]);
				pushToArray(source, code2[1]);
				source.push(name1 + type + name2);
				return ["", source]
			}
			if (!name1 && !name2) {
				pushToArray(source, code1[1].slice(0, -1));
				pushToArray(source, code2[1].slice(0, -1));
				source.push("(" + lastOfArray(code1[1]) + ")" + type + "(" + lastOfArray(code2[1]) + ")");
				return ["", source]
			}
			if (name1 && !name2) {
				pushToArray(source, code1[1]);
				pushToArray(source, code2[1].slice(0, -1));
				source.push(name1 + type + "(" + lastOfArray(code2[1]) + ")");
				return ["", source]
			}
			if (!name1 && name2) {
				pushToArray(source, code1[1].slice(0, -1));
				pushToArray(source, code2[1]);
				source.push("(" + lastOfArray(code1[1]) + ")" + type + name2);
				return ["", source]
			}
			return undefined
		},
		genConfig: function(tplNode) {
			var source = [],
				configName, params, hash, self = this;
			if (tplNode) {
				params = tplNode.params;
				hash = tplNode.hash;
				if (params || hash) {
					configName = guid("config");
					source.push("var " + configName + " = {};")
				}
				if (params) {
					var paramsName = guid("params");
					source.push("var " + paramsName + " = [];");
					S.each(params, function(param) {
						var nextIdNameCode = self[param.type](param);
						if (nextIdNameCode[0]) {
							pushToArray(source, nextIdNameCode[1]);
							source.push(paramsName + ".push(" + nextIdNameCode[0] + ");")
						} else {
							pushToArray(source, nextIdNameCode[1].slice(0, -1));
							source.push(paramsName + ".push(" + lastOfArray(nextIdNameCode[1]) + ");")
						}
					});
					source.push(configName + ".params=" + paramsName + ";")
				}
				if (hash) {
					var hashName = guid("hash");
					source.push("var " + hashName + " = {};");
					S.each(hash.value, function(v, key) {
						var nextIdNameCode = self[v.type](v);
						if (nextIdNameCode[0]) {
							pushToArray(source, nextIdNameCode[1]);
							source.push(hashName + '["' + key + '"] = ' + nextIdNameCode[0] + ";")
						} else {
							pushToArray(source, nextIdNameCode[1].slice(0, -1));
							source.push(hashName + '["' + key + '"] = ' + lastOfArray(nextIdNameCode[1]) + ";")
						}
					});
					source.push(configName + ".hash=" + hashName + ";")
				}
			}
			return [configName, source]
		},
		conditionalOrExpression: function(e) {
			return this.genOpExpression(e, "||")
		},
		conditionalAndExpression: function(e) {
			return this.genOpExpression(e, "&&")
		},
		relationalExpression: function(e) {
			return this.genOpExpression(e, e.opType)
		},
		equalityExpression: function(e) {
			return this.genOpExpression(e, e.opType)
		},
		additiveExpression: function(e) {
			return this.genOpExpression(e, e.opType)
		},
		multiplicativeExpression: function(e) {
			return this.genOpExpression(e, e.opType)
		},
		unaryExpression: function(e) {
			var source = [],
				name, unaryType = e.unaryType,
				code = this[e.value.type](e.value);
			arrayPush.apply(source, code[1]);
			if (name = code[0]) {
				source.push(name + "=" + unaryType + name + ";")
			} else {
				source[source.length - 1] = "" + unaryType + lastOfArray(source)
			}
			return [name, source]
		},
		string: function(e) {
			return ["", ["'" + escapeString(e.value, true) + "'"]]
		},
		number: function(e) {
			return ["", [e.value]]
		},
		"boolean": function(e) {
			return ["", [e.value]]
		},
		id: function(idNode) {
			var source = [],
				depth = idNode.depth,
				idParts = idNode.parts,
				idName = guid("id"),
				self = this;
			var idString = self.getIdStringFromIdParts(source, idParts);
			source.push("var " + idName + " = getPropertyUtil(engine,scope" + ',"' + idString + '",' + depth + "," + idNode.lineNumber +
				");");
			return [idName, source]
		},
		block: function(block) {
			var programNode = block.program,
				source = [],
				self = this,
				tplNode = block.tpl,
				configNameCode = self.genConfig(tplNode),
				configName = configNameCode[0],
				tplPath = tplNode.path,
				pathString = tplPath.string,
				inverseFn;
			pushToArray(source, configNameCode[1]);
			if (!configName) {
				configName = S.guid("config");
				source.push("var " + configName + " = {};")
			}
			source.push(configName + ".fn=" + self.genFunction(programNode.statements).join("\n") + ";");
			if (programNode.inverse) {
				inverseFn = self.genFunction(programNode.inverse).join("\n");
				source.push(configName + ".inverse=" + inverseFn + ";")
			}
			if (tplNode.isInverted) {
				var tmp = guid("inverse");
				source.push("var " + tmp + "=" + configName + ".fn;");
				source.push(configName + ".fn = " + configName + ".inverse;");
				source.push(configName + ".inverse = " + tmp + ";")
			}
			if (!tplNode.hash && !tplNode.params) {
				var parts = tplPath.parts;
				for (var i = 0; i < parts.length; i++) {
					if (typeof parts[i] !== "string") {
						pathString = self.getIdStringFromIdParts(source, parts);
						break
					}
				}
			}
			source.push("buffer += runBlockCommandUtil(engine, scope, " + configName + ", " + '"' + pathString + '", ' +
				tplPath.lineNumber + ");");
			return source
		},
		content: function(contentNode) {
			return ["buffer += '" + escapeString(contentNode.value, false) + "';"]
		},
		tpl: function(tplNode) {
			var source = [],
				genIdOrInlineCommandCode = this.genIdOrInlineCommand(tplNode.path, tplNode);
			pushToArray(source, genIdOrInlineCommandCode[1]);
			source.push("buffer += renderOutputUtil(" + genIdOrInlineCommandCode[0] + "," + tplNode.escaped + ");");
			return source
		},
		tplExpression: function(e) {
			var source = [],
				escaped = e.escaped,
				code, expression = e.expression,
				type = e.expression.type,
				expressionOrVariable;
			if (type === "id") {
				code = this.genIdOrInlineCommand(expression)
			} else {
				code = this[type](expression)
			}
			if (code[0]) {
				pushToArray(source, code[1]);
				expressionOrVariable = code[0]
			} else {
				pushToArray(source, code[1].slice(0, -1));
				expressionOrVariable = lastOfArray(code[1])
			}
			source.push("buffer += renderOutputUtil(" + expressionOrVariable + "," + escaped + ");");
			return source
		},
		getIdStringFromIdParts: function(source, idParts) {
			var idString = "",
				self = this,
				i, idPart, idPartType, nextIdNameCode, first = true;
			for (i = 0; i < idParts.length; i++) {
				idPart = idParts[i];
				idPartType = idPart.type;
				if (!first) {
					idString += "."
				}
				if (idPartType) {
					nextIdNameCode = self[idPartType](idPart);
					if (nextIdNameCode[0]) {
						pushToArray(source, nextIdNameCode[1]);
						idString += '"+' + nextIdNameCode[0] + '+"';
						first = true
					}
				} else {
					idString += idPart;
					first = false
				}
			}
			return idString
		}
	};
	var compiler;
	compiler = {
		parse: function(tpl) {
			return parser.parse(tpl)
		},
		compileToStr: function(tpl) {
			var func = this.compile(tpl);
			return "function(" + func.params.join(",") + "){\n" + func.source.join("\n") + "}"
		},
		compile: function(tpl) {
			var root = this.parse(tpl);
			variableId = 0;
			return gen.genFunction(root.statements, true)
		},
		compileToFn: function(tpl, config) {
			var code = compiler.compile(tpl);
			config = config || {};
			var sourceURL = "sourceURL=" + (config.name ? config.name : "xtemplate" + xtemplateId++) + ".js";
			return Function.apply(null, [].concat(code.params).concat(code.source.join("\n") + "\n//@ " + sourceURL +
				"\n//# " + sourceURL))
		}
	};
	return compiler
});

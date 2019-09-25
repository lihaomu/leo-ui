(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc239"],{"4d3f":function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"loading-page"},[l("h1",[e._v("Input 输入框")]),e._m(0),l("div",{staticClass:"card",attrs:{vertical:""}},[l("div",{staticClass:"demo"},[l("div",{staticClass:"example"},[l("o-form",{attrs:{"label-width":60}},[l("o-form-item",{attrs:{label:"尺寸"}},[l("o-radio-group",[e._l(e.sizeOptions,function(a){return[l("o-radio",{attrs:{current:a.value},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}},[e._v("\n                  "+e._s(a.label)+"\n                ")])]})],2)],1),l("o-form-item",{attrs:{label:"格式"}},[l("o-radio-group",[e._l(e.formatterOptions,function(a){return[l("o-radio",{attrs:{current:a.value},model:{value:e.formatter,callback:function(a){e.formatter=a},expression:"formatter"}},[e._v("\n                  "+e._s(a.label)+"\n                ")])]})],2)],1),l("o-form-item",{attrs:{label:"状态"}},[l("o-checkbox-group",[l("o-checkbox",{model:{value:e.lazy,callback:function(a){e.lazy=a},expression:"lazy"}},[e._v("lazy")]),l("o-checkbox",{model:{value:e.clearable,callback:function(a){e.clearable=a},expression:"clearable"}},[e._v("clearable")]),l("o-checkbox",{model:{value:e.readonly,callback:function(a){e.readonly=a},expression:"readonly"}},[e._v("readonly")]),l("o-checkbox",{model:{value:e.disabled,callback:function(a){e.disabled=a},expression:"disabled"}},[e._v("disabled")])],1)],1)],1),l("br"),l("o-input",{staticStyle:{width:"320px"},attrs:{placeholder:"Enter something...",formatter:e.formatter,clearable:e.clearable,readonly:e.readonly,disabled:e.disabled,lazy:e.lazy,size:e.size},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),e._v("\n        "+e._s(e.value)+"\n      ")],1),e._m(1),l("div",{staticClass:"description"},[e._v("\n        输入框属性设置\n      ")])]),l("div",{staticClass:"code",class:{visible:e.visible1}},[l("div",{staticClass:"html"},[l("textarea",{attrs:{type:"text",id:"html1"},domProps:{value:e.html1}}),l("a",{on:{click:function(a){return e.copy(a,"html1")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.html1))])]),l("div",{staticClass:"js"},[l("textarea",{attrs:{type:"text",id:"java1"},domProps:{value:e.java1}}),l("a",{on:{click:function(a){return e.copy(a,"java1")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.java1))])])]),l("div",{staticClass:"more",class:{open:e.visible1},on:{click:function(a){e.visible1=!e.visible1}}})]),e._m(2),e._m(3),l("o-table",[l("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,function(a){return l("th",[e._v(e._s(a.label))])}),0),e._l(e.propsTbody,function(a){return l("tr",e._l(e.propsThead,function(t){return l("td",{domProps:{innerHTML:e._s(a[t.value])}})}),0)})],2),e._m(4),l("o-table",[l("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.eventsThead,function(a){return l("th",[e._v(e._s(a.label))])}),0),e._l(e.eventsTbody,function(a){return l("tr",e._l(e.eventsThead,function(t){return l("td",{domProps:{innerHTML:e._s(a[t.value])}})}),0)})],2)],1)},n=[function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"anchor"},[l("h2",[e._v("Examples")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"title"},[l("span",[e._v("基本用法")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"anchor"},[l("h2",[e._v("API")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"anchor"},[l("h3",[e._v("Input props")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"anchor"},[l("h3",[e._v("Input events")])])}],o={name:"Input",data:function(){return{visible1:!1,value:"",size:"",formatter:"",lazy:!1,readonly:!1,disabled:!1,clearable:!1,formatterOptions:[{label:"email",value:"email"},{label:"number",value:"number"},{label:"phone",value:"phone"},{label:"name",value:"name"},{label:"mac",value:"mac"},{label:"default",value:""}],propsTbody:[{label:"type",type:"String",introduce:"输入框类型，可选值为 <em>text</em>、<em>password</em> 和 <em>textarea</em>",default:"text"},{label:"size",type:"String",introduce:"输入框大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置",default:"-"},{label:"formatter",type:"String",introduce:"输入框格式要求，可选值为 <em>email</em>、<em>number</em>、<em>phone</em>、<em>name</em>、<em>mac</em> 或者不设置",default:"-"},{label:"value",type:"String 或 Number",introduce:"绑定的值，可使用 <em success>v-model</em> 双向绑定",default:"-"},{label:"placeholder",type:"String",introduce:"占位文本",default:"-"},{label:"maxlength",type:"Number",introduce:"最大输入长度",default:"-"},{label:"autocomplete",type:"String",introduce:"原生的自动完成功能，可选值为 <em>off</em> 和 <em>on</em>",default:"off"},{label:"parser",type:"Function",introduce:"可将数据转换成需要的形式。设置 <em>formatter</em> 时 <em error>无效</em>",default:"-"},{label:"autofocus",type:"Boolean",introduce:"原生的自动获取焦点",default:"false"},{label:"disabled",type:"Boolean",introduce:"设置输入框禁用状态",default:"false"},{label:"readonly",type:"Boolean",introduce:"设置输入框只读状态",default:"false"},{label:"clearable",type:"Boolean",introduce:"设置输入框可清除状态",default:"false"},{label:"lazy",type:"Boolean",introduce:"设置输入框触发改变数据状态。设置为 <em>true</em> 时，只有输入框失去焦点或按下回车键时 <em warning>触发</em>",default:"false"}],eventsTbody:[{name:"on-enter",introduce:"按下回车键时触发",return:"event"},{name:"on-focus",introduce:"输入框聚焦时触发",return:"event"},{name:"on-blur",introduce:"输入框失去焦点时触发",return:"event"},{name:"on-change",introduce:"数据改变时触发",return:"value"},{name:"on-clear",introduce:"点击清除按钮时触发",return:"无"}],html1:'<o-form :label-width="60">\n                      <o-form-item label="尺寸">\n                        <o-radio-group>\n                          <template v-for="x in sizeOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="size">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="格式">\n                        <o-radio-group>\n                          <template v-for="x in formatterOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="formatter">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="状态">\n                        <o-checkbox-group>\n                          <o-checkbox v-model="lazy">lazy</o-checkbox>\n                          <o-checkbox v-model="clearable">clearable</o-checkbox>\n                          <o-checkbox v-model="readonly">readonly</o-checkbox>\n                          <o-checkbox v-model="disabled">disabled</o-checkbox>\n                        </o-checkbox-group>\n                      </o-form-item>\n                    </o-form>\n                    <br>\n                    <o-input\n                      placeholder="Enter something..."\n                      :formatter="formatter"\n                      :clearable="clearable"\n                      :readonly="readonly"\n                      :disabled="disabled"\n                      v-model="value"\n                      :lazy="lazy"\n                      :size="size">\n                    </o-input>\n                    {{ value }}',java1:"export default {\n                      data () {\n                        return {\n                          value: '',\n\n                          size: '',\n                          formatter: '',\n\n                          lazy: false,\n                          readonly: false,\n                          disabled: false,\n                          clearable: false,\n\n                          sizeOptions: [\n                            { label: 'large', value: 'large' },\n                            { label: 'small', value: 'small' },\n                            { label: 'mini', value: 'mini' },\n                            { label: 'default', value: '' }\n                          ],\n                          formatterOptions: [\n                            { label: 'email', value: 'email' },\n                            { label: 'number', value: 'number' },\n                            { label: 'phone', value: 'phone' },\n                            { label: 'name', value: 'name' },\n                            { label: 'mac', value: 'mac' },\n                            { label: 'default', value: '' }\n                          ]\n                        }\n                      }\n                    }"}}},r=o,i=l("2877"),s=Object(i["a"])(r,t,n,!1,null,null,null);a["default"]=s.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215fad"],{c109:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-page"},[l("h1",[e._v("Form 表单")]),e._m(0),l("div",{staticClass:"card",attrs:{vertical:""}},[l("div",{staticClass:"demo"},[l("div",{staticClass:"example"},[l("o-form",{attrs:{"label-width":80}},[l("o-form-item",{attrs:{label:"尺寸"}},[l("o-radio-group",[e._l(e.sizeOptions,function(t){return[l("o-radio",{attrs:{current:t.value},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[e._v("\n                  "+e._s(t.label)+"\n                ")])]})],2)],1),l("o-form-item",{attrs:{label:"对齐方式"}},[l("o-radio-group",[e._l(e.placementOptions,function(t){return[l("o-radio",{attrs:{current:t.value},model:{value:e.placement,callback:function(t){e.placement=t},expression:"placement"}},[e._v("\n                  "+e._s(t.label)+"\n                ")])]})],2)],1),l("o-form-item",{attrs:{label:"宽度"}},[l("o-input",{staticStyle:{width:"320px"},attrs:{formatter:"number"},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}})],1),l("o-form-item",{attrs:{label:"状态"}},[l("o-checkbox-group",[l("o-checkbox",{model:{value:e.inline,callback:function(t){e.inline=t},expression:"inline"}},[e._v("inline")])],1)],1)],1),l("br"),l("o-form",{attrs:{"label-placement":e.placement,"label-width":e.width,inline:e.inline,size:e.size}},[l("o-form-item",{attrs:{label:"名称"}},[l("o-input",{staticStyle:{"min-width":"180px"}})],1),l("o-form-item",{attrs:{label:"性别"}},[l("o-select",{staticStyle:{"min-width":"180px"},attrs:{options:["男","女"]},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}})],1),l("o-form-item",{attrs:{label:"简介"}},[l("o-input",{staticStyle:{"min-width":"180px"},attrs:{type:"textarea"}})],1),l("o-form-item",[l("o-button",{attrs:{type:"shadow"}},[e._v("确定")])],1)],1)],1),e._m(1),l("div",{staticClass:"description"},[e._v("\n        表单属性设置\n      ")])]),l("div",{staticClass:"code",class:{visible:e.visible1}},[l("div",{staticClass:"html"},[l("textarea",{attrs:{type:"text",id:"html1"},domProps:{value:e.html1}}),l("a",{on:{click:function(t){return e.copy(t,"html1")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.html1))])]),l("div",{staticClass:"js"},[l("textarea",{attrs:{type:"text",id:"java1"},domProps:{value:e.java1}}),l("a",{on:{click:function(t){return e.copy(t,"java1")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.java1))])])]),l("div",{staticClass:"more",class:{open:e.visible1},on:{click:function(t){e.visible1=!e.visible1}}})]),l("div",{staticClass:"card",attrs:{vertical:""}},[l("div",{staticClass:"demo"},[l("div",{staticClass:"example"},[l("o-edit",{attrs:{disabled:!e.canConfirm},on:{"on-confirm":e.handlerConfirm,"on-cancel":e.handlerCancel},model:{value:e.edit,callback:function(t){e.edit=t},expression:"edit"}}),l("br"),l("o-form",{attrs:{"label-width":60}},[l("o-form-item",{attrs:{label:"名称",value:e.oldValue,editable:e.edit}},[l("o-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)],1),e._m(2),l("div",{staticClass:"description"},[e._v("\n        与编辑组件结合用法\n      ")])]),l("div",{staticClass:"code",class:{visible:e.visible2}},[l("div",{staticClass:"html"},[l("textarea",{attrs:{type:"text",id:"html2"},domProps:{value:e.html2}}),l("a",{on:{click:function(t){return e.copy(t,"html2")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.html2))])]),l("div",{staticClass:"js"},[l("textarea",{attrs:{type:"text",id:"java2"},domProps:{value:e.java2}}),l("a",{on:{click:function(t){return e.copy(t,"java2")}}},[e._v("Copy")]),l("pre",[e._v("                    "+e._s(e.java2))])])]),l("div",{staticClass:"more",class:{open:e.visible2},on:{click:function(t){e.visible2=!e.visible2}}})]),e._m(3),e._m(4),l("o-table",[l("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,function(t){return l("th",[e._v(e._s(t.label))])}),0),e._l(e.propsTbody,function(t){return l("tr",e._l(e.propsThead,function(a){return l("td",{domProps:{innerHTML:e._s(t[a.value])}})}),0)})],2),e._m(5),l("o-table",[l("tr",{attrs:{slot:"thead"},slot:"thead"},e._l(e.propsThead,function(t){return l("th",[e._v(e._s(t.label))])}),0),e._l(e.propsTbody2,function(t){return l("tr",e._l(e.propsThead,function(a){return l("td",{domProps:{innerHTML:e._s(t[a.value])}})}),0)})],2)],1)},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"anchor"},[l("h2",[e._v("Examples")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"title"},[l("span",[e._v("基本用法")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"title"},[l("span",[e._v("组件结合")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"anchor"},[l("h2",[e._v("API")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"anchor"},[l("h3",[e._v("Form props")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"anchor"},[l("h3",[e._v("FormItem props")])])}],o={name:"Form",data:function(){return{visible1:!1,visible2:!1,size:"",width:100,placement:"right",inline:!1,sex:"",value:"",oldValue:"",edit:!1,placementOptions:[{label:"left",value:"left"},{label:"top-left",value:"top-left"},{label:"top",value:"top"},{label:"top-right",value:"top-right"},{label:"right",value:"right"},{label:"bottom-right",value:"bottom-right"},{label:"bottom-left",value:"bottom-left"}],propsTbody:[{label:"size",type:"String",introduce:"表单大小，可选值为 <em>large</em>、<em>small</em>、<em>mini</em> 或者不设置",default:"-"},{label:"label-placement",type:"String",introduce:"表单 <em>label</em> 布局，可选值为 <em>left</em>、<em>top-left</em>、<em>top</em>、<em>top-right</em>、<em>right</em>、<em>bottom-right</em>、<em>bottom-left</em>",default:"right"},{label:"labelWidth",type:"Number",introduce:'表单 <em>label</em> 宽度。设置 <em>label-placement="top"</em> 时 <em error>无效</em>',default:"100"},{label:"required",type:"Boolean",introduce:"设置表单必填项的状态",default:"false"},{label:"inline",type:"Boolean",introduce:"设置表单行内状态",default:"false"}],propsTbody2:[{label:"label",type:"String",introduce:"<em>label</em> 的值",default:"-"},{label:"value",type:"String",introduce:"<em>value</em> 的值",default:"-"},{label:"emptyText",type:"String",introduce:"<em>value</em> 为空时显示的内容",default:"空"},{label:"required",type:"Boolean",introduce:"设置必填项的状态",default:"false"},{label:"editable",type:"Boolean",introduce:"设置可编辑状态，结合 <em>value</em> 一起使用",default:"true"}],html1:'<o-form :label-width="80">\n                      <o-form-item label="尺寸">\n                        <o-radio-group>\n                          <template v-for="x in sizeOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="size">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="对齐方式">\n                        <o-radio-group>\n                          <template v-for="x in placementOptions">\n                            <o-radio\n                              :current="x.value"\n                              v-model="placement">\n                              {{ x.label }}\n                            </o-radio>\n                          </template>\n                        </o-radio-group>\n                      </o-form-item>\n                      <o-form-item label="宽度">\n                        <o-input\n                          formatter="number"\n                          v-model="width">\n                        </o-input>\n                      </o-form-item>\n                      <o-form-item label="状态">\n                        <o-checkbox-group>\n                          <o-checkbox v-model="inline">inline</o-checkbox>\n                        </o-checkbox-group>\n                      </o-form-item>\n                    </o-form>\n                    <br>\n                    <o-form\n                      :label-placement="placement"\n                      :label-width="width"\n                      :inline="inline"\n                      :size="size">\n                      <o-form-item label="名称">\n                        <o-input></o-input>\n                      </o-form-item>\n                      <o-form-item label="性别">\n                        <o-select\n                          :options="[\'男\', \'女\']"\n                          v-model="sex">\n                        </o-select>\n                      </o-form-item>\n                      <o-form-item label="简介">\n                        <o-input type="textarea"></o-input>\n                      </o-form-item>\n                      <o-form-item>\n                        <o-button type="shadow">确定</o-button>\n                      </o-form-item>\n                    </o-form>',html2:'<o-edit\n                      @on-confirm="handlerConfirm"\n                      @on-cancel="handlerCancel"\n                      :disabled="!canConfirm"\n                      v-model="edit">\n                    </o-edit>\n                    <br>\n                    <o-form :label-width="60">\n                      <o-form-item label="名称" :value="oldValue" :editable="edit">\n                        <o-input v-model="value"></o-input>\n                      </o-form-item>\n                    </o-form>',java1:"export default {\n                      data () {\n                        return {\n                          size: '',\n                          width: 100,\n                          placement: 'right',\n\n                          inline: false,\n\n                          sex: '',\n\n                          sizeOptions: [\n                            { label: 'large', value: 'large' },\n                            { label: 'small', value: 'small' },\n                            { label: 'mini', value: 'mini' },\n                            { label: 'default', value: '' }\n                          ],\n                          placementOptions: [\n                            { label: 'left', value: 'left' },\n                            { label: 'top-left', value: 'top-left' },\n                            { label: 'top', value: 'top' },\n                            { label: 'top-right', value: 'top-right' },\n                            { label: 'right', value: 'right' },\n                            { label: 'bottom-right', value: 'bottom-right' },\n                            { label: 'bottom-left', value: 'bottom-left' }\n                          ]\n                        }\n                      }\n                    }",java2:"export default {\n                      data () {\n                        return {\n                          value: '',\n                          oldValue: '',\n\n                          edit: false\n                        }\n                      },\n                      computed: {\n                        canConfirm () {\n                          return this.value === 'leo-ui'\n                        }\n                      },\n                      methods: {\n                        handlerConfirm () {\n                          this.edit = false;\n                          this.oldValue = this.value\n                        },\n                        handlerCancel () {\n                          this.edit = false;\n                          this.value = this.oldValue\n                        }\n                      }\n                    }"}},computed:{canConfirm:function(){return"leo-ui"===this.value}},methods:{copy:function(e,t){var l=e.target;l.className||(document.querySelector("#"+t).select(),document.execCommand("Copy"),l.innerHTML="Copied",l.className="success",setTimeout(function(){l.className="",l.innerHTML="Copy"},5e3))},handlerConfirm:function(){this.edit=!1,this.oldValue=this.value},handlerCancel:function(){this.edit=!1,this.value=this.oldValue}}},i=o,r=l("2877"),s=Object(r["a"])(i,a,n,!1,null,null,null);t["default"]=s.exports}}]);
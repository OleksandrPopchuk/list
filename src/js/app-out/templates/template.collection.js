define(['handlebars.runtime'], function(Handlebars) {

this["List"] = this["List"] || {};

Handlebars.registerPartial("home.view.hbs", this["List"]["home.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"fn-home-static-module\">\r\n    <h1 class=\"page-heading\">Welcome to the Contacts List application</h1>\r\n\r\n    <a href=\"#\" data-url=\"list\">Go to Contacts List</a>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("list.item.hbs", this["List"]["list.item.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list-item-row\">\r\n    <img class=\"photo\" src=\"assets/imgs/contacts/"
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\">\r\n    <span class=\"first-name\">"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <span class=\"last-name\">"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"phone-label\">Phone: </span>\r\n    <span class=\"phone\">"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</span>\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"email-label\">Email: </span>\r\n    <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" class=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("list.view.hbs", this["List"]["list.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"fn-list-static-module\">\r\n    <h1 class=\"page-heading\">Contacts List page</h1>\r\n\r\n    <div class=\"contacts-wrapper\">\r\n        <div class=\"contact-details fn-contact-details\"></div>\r\n        <ul class=\"contacts-list fn-contacts-list\"></ul>\r\n    </div>\r\n\r\n    <a href=\"#\" data-url=\"/\">Go back to Home</a>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("sub.menu.view.hbs", this["List"]["sub.menu.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}));

return this["List"];

});
define(['handlebars.runtime'], function(Handlebars) {

this["List"] = this["List"] || {};

Handlebars.registerPartial("home.view.hbs", this["List"]["home.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"fn-home-static-module\">\r\n    <h1 class=\"page-heading\">Welcome to the Contacts List application</h1>\r\n\r\n    <a href=\"#\" data-url=\"list\">Go to Contacts List</a>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("list.item.details.hbs", this["List"]["list.item.details.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"contact-details-overlay hidden fn-contact-details-overlay\">\r\n    <h2>Are you sure you want to remove this contact?</h2>\r\n    <button class=\"contact-remove-confirm fn-contact-remove-confirm\">Remove it</button>\r\n    <button class=\"contact-remove-cancel fn-contact-remove-cancel\">Cancel</button>\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <button class=\"contact-remove-button fn-contact-remove\">Remove</button>\r\n    <button class=\"contact-edit-button fn-contact-edit\">Edit</button>\r\n    <button class=\"contact-save-button fn-contact-save hidden\">Save</button>\r\n    <button class=\"contact-cancel-button fn-contact-cancel hidden\">Cancel</button>\r\n    <div class=\"photo-wrapper fn-edit-photo\">\r\n        <img class=\"photo\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n    <span class=\"name data-span\">\r\n        <span class=\"first-name\">"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"last-name\">"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </span>\r\n    <div class=\"name-edit-inputs\">\r\n        <input type=\"text\" title=\"First Name\" class=\"fn-edit-input hidden\" value=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\" data-field=\"firstName\" placeholder=\"First Name\">\r\n        <input type=\"text\" title=\"Last Name\" class=\"fn-edit-input hidden\" value=\""
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\" data-field=\"lastName\" placeholder=\"Last Name\">\r\n    </div>\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"label bdate-label\">Birthday: </span>\r\n    <span class=\"bdate data-span\">"
    + alias4(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bdate","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <input type=\"text\" title=\"Birthday\" class=\"fn-edit-input hidden\" value=\""
    + alias4(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bdate","hash":{},"data":data}) : helper)))
    + "\" data-field=\"bdate\">\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"label site-label\">Website: </span>\r\n    <a href=\""
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "\" class=\"site data-span\">"
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "</a>\r\n    <input type=\"text\" title=\"Website\" class=\"fn-edit-input hidden\" value=\""
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "\" data-field=\"site\">\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"label city-label\">City: </span>\r\n    <span class=\"city data-span\">"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <input type=\"text\" title=\"City\" class=\"fn-edit-input hidden\" value=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\" data-field=\"city\">\r\n</div>\r\n<div class=\"list-item-row\">\r\n    <span class=\"label bio-label\">Bio: </span>\r\n    <span class=\"bio data-span\">"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <textarea title=\"Bio\" class=\"bio-textarea fn-edit-input hidden\" data-field=\"bio\">"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("list.item.hbs", this["List"]["list.item.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list-item-content fn-list-item\">\r\n    <div class=\"list-item-row\">\r\n        <img class=\"photo\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\">\r\n    <span class=\"name\">\r\n        <span class=\"first-name\">"
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "</span>\r\n        <span class=\"last-name\">"
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </span>\r\n    </div>\r\n    <div class=\"list-item-row\">\r\n        <span class=\"label bdate-label\">Birthday: </span>\r\n        <span class=\"bdate\">"
    + alias4(((helper = (helper = helpers.bdate || (depth0 != null ? depth0.bdate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bdate","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n    <div class=\"list-item-row\">\r\n        <span class=\"label site-label\">Website: </span>\r\n        <a href=\""
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "\" class=\"site\">"
    + alias4(((helper = (helper = helpers.site || (depth0 != null ? depth0.site : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"site","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </div>\r\n</div>\r\n";
},"useData":true}));

Handlebars.registerPartial("list.view.hbs", this["List"]["list.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"fn-list-static-module\">\r\n    <h1 class=\"page-heading\">Contacts List page</h1>\r\n\r\n    <div class=\"contacts-wrapper\">\r\n        <div class=\"contact-details fn-contact-details\"></div>\r\n        <div class=\"contacts-list-wrapper\">\r\n            <ul class=\"contacts-list fn-contacts-list\"></ul>\r\n            <button class=\"add-new-contact fn-add-new-contact\">Add new contact</button>\r\n        </div>\r\n    </div>\r\n\r\n    <a href=\"#\" data-url=\"/\">Go back to Home</a>\r\n</div>";
},"useData":true}));

Handlebars.registerPartial("sub.menu.view.hbs", this["List"]["sub.menu.view.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}));

return this["List"];

});
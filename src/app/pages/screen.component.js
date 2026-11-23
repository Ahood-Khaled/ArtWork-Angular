import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { ArtvistaService } from '../services/artvista.service';
import { interval } from 'rxjs';
import { AuthService, UserService } from '../services/api.services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ["/artworks", a0];
const _c1 = a0 => ["/galleries", a0];
const _forTrack0 = ($index, $item) => $item.id;
function ScreenComponent_Case_1_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23)(1, "a", 24)(2, "span", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 26)(5, "a", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const art_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + art_r1.imageUrl + " )");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, art_r1.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(art_r1.status);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, art_r1.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(art_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(art_r1.artistName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(art_r1.saleType === "Auction" ? "$" + (art_r1.currentPrice ?? 0) : "$" + (art_r1.fixedPrice ?? 0));
} }
function ScreenComponent_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5)(1, "div", 6)(2, "p", 7);
    i0.ɵɵtext(3, "THE ART OF DISCOVERY");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h1");
    i0.ɵɵtext(5, "Digital Art Gallery &");
    i0.ɵɵelement(6, "br");
    i0.ɵɵtext(7, "Live Auction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 8);
    i0.ɵɵtext(9, "Discover. Collect. Own.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 9);
    i0.ɵɵtext(11, "Explore Art ");
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "\u2192");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵelement(15, "div", 11)(16, "div", 12)(17, "div", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "section", 14)(19, "div", 15)(20, "h2");
    i0.ɵɵtext(21, "Featured Collections");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 16);
    i0.ɵɵtext(23, "View All \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 17)(25, "a", 18)(26, "span");
    i0.ɵɵtext(27, "Contemporary Art");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "a", 19)(29, "span");
    i0.ɵɵtext(30, "Nature's Beauty");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "a", 20)(32, "span");
    i0.ɵɵtext(33, "Abstract Magic");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(34, "section", 21)(35, "div", 15)(36, "h2");
    i0.ɵɵtext(37, "Featured Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "a", 16);
    i0.ɵɵtext(39, "Explore all \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 22);
    i0.ɵɵrepeaterCreate(41, ScreenComponent_Case_1_For_42_Template, 11, 12, "article", 23, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(41);
    i0.ɵɵrepeater(ctx_r1.arts.slice(0, 3));
} }
function ScreenComponent_Case_2_small_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Enter a valid email address.");
    i0.ɵɵelementEnd();
} }
function ScreenComponent_Case_2_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Password is required.");
    i0.ɵɵelementEnd();
} }
function ScreenComponent_Case_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 28)(2, "div", 29);
    i0.ɵɵtext(3, "A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "ArtVista");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Digital Art Gallery");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "Step into the world");
    i0.ɵɵelement(10, "br");
    i0.ɵɵtext(11, "of fine art");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 30)(13, "h1");
    i0.ɵɵtext(14, "Welcome Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p", 31);
    i0.ɵɵtext(16, "Sign in to your account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "form", 32);
    i0.ɵɵlistener("ngSubmit", function ScreenComponent_Case_2_Template_form_ngSubmit_17_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.login()); });
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, "Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 33);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, ScreenComponent_Case_2_small_21_Template, 2, 0, "small", 34);
    i0.ɵɵelementStart(22, "label");
    i0.ɵɵtext(23, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 35);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, ScreenComponent_Case_2_small_25_Template, 2, 0, "small", 34);
    i0.ɵɵelementStart(26, "button", 36);
    i0.ɵɵtext(27, "Login");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 37);
    i0.ɵɵelement(29, "span");
    i0.ɵɵtext(30, "or");
    i0.ɵɵelement(31, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "a", 38);
    i0.ɵɵtext(33, "Create an Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p", 39);
    i0.ɵɵtext(35, "Sign in with your registered ArtVista account.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("formGroup", ctx_r1.loginForm);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loginForm.controls.email.touched && ctx_r1.loginForm.controls.email.invalid);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loginForm.controls.password.touched && ctx_r1.loginForm.controls.password.invalid);
} }
function ScreenComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 40);
    i0.ɵɵelement(2, "div", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 30)(4, "h1");
    i0.ɵɵtext(5, "Create Your Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 31);
    i0.ɵɵtext(7, "Join our art community");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "form", 32);
    i0.ɵɵlistener("ngSubmit", function ScreenComponent_Case_3_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.register()); });
    i0.ɵɵelementStart(9, "div", 42)(10, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_3_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.registerForm.patchValue({ role: "Collector" })); });
    i0.ɵɵtext(11, "Collector");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_3_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.registerForm.patchValue({ role: "Artist" })); });
    i0.ɵɵtext(13, "Artist");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "input", 44);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 33);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 35);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 36);
    i0.ɵɵtext(18, "Register");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "p", 39);
    i0.ɵɵtext(20, "Already have an account? ");
    i0.ɵɵelementStart(21, "a", 45);
    i0.ɵɵtext(22, "Login");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("formGroup", ctx_r1.registerForm);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.registerForm.value.role === "Collector");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.registerForm.value.role === "Artist");
    i0.ɵɵadvance(2);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵcontrol();
} }
function ScreenComponent_Case_4_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 49);
    i0.ɵɵelement(1, "div", 50);
    i0.ɵɵelementStart(2, "div", 51)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const gallery_r6 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c1, gallery_r6.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", "grad-" + (gallery_r6.id === 1 ? "one" : gallery_r6.id === 2 ? "two" : "three"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(gallery_r6.title);
} }
function ScreenComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "h1");
    i0.ɵɵtext(3, "Our Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Explore curated art exhibitions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "input", 47);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ScreenComponent_Case_4_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 48);
    i0.ɵɵrepeaterCreate(8, ScreenComponent_Case_4_For_9_Template, 7, 5, "a", 49, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchTerm);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.filteredGalleries);
} }
function ScreenComponent_Case_5_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23);
    i0.ɵɵelement(1, "a", 24);
    i0.ɵɵelementStart(2, "div", 26)(3, "a", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const art_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + art_r7.imageUrl + " )");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, art_r7.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, art_r7.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(art_r7.title);
} }
function ScreenComponent_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 52);
    i0.ɵɵtext(1, "\u2190 Back to Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 53);
    i0.ɵɵelement(3, "div", 54);
    i0.ɵɵelementStart(4, "div")(5, "h1");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 55);
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Created by: ");
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(15, "div", 15)(16, "h2");
    i0.ɵɵtext(17, "Gallery Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 56);
    i0.ɵɵtext(19, "Edit Gallery (owner)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 57);
    i0.ɵɵrepeaterCreate(21, ScreenComponent_Case_5_For_22_Template, 5, 9, "article", 23, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", "grad-" + (ctx_r1.selectedGallery.id === 1 ? "one" : ctx_r1.selectedGallery.id === 2 ? "two" : "three"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedGallery.title, " Exhibition");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedGallery.story);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u25A7 ", ctx_r1.galleryArts.length, " Artworks ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.fullName);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.galleryArts);
} }
function ScreenComponent_Case_6_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function ScreenComponent_Case_6_Conditional_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.buyNow(ctx_r1.selectedArtwork.id)); });
    i0.ɵɵtext(1, "Buy Now");
    i0.ɵɵelementEnd();
} }
function ScreenComponent_Case_6_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 67);
    i0.ɵɵtext(1, "Go to Live Auction");
    i0.ɵɵelementEnd();
} }
function ScreenComponent_Case_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "div", 58);
    i0.ɵɵelementStart(2, "div", 59)(3, "button", 60);
    i0.ɵɵlistener("click", function ScreenComponent_Case_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleFavorite(ctx_r1.selectedArtwork.id)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "By ");
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 55);
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "span", 61);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 62);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "h2", 63);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 64)(25, "button", 65);
    i0.ɵɵlistener("click", function ScreenComponent_Case_6_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleFavorite(ctx_r1.selectedArtwork.id)); });
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(27, ScreenComponent_Case_6_Conditional_27_Template, 2, 0, "button", 66)(28, ScreenComponent_Case_6_Conditional_28_Template, 2, 0, "a", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "a", 68);
    i0.ɵɵtext(30, "View Gallery");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + ctx_r1.selectedArtwork.imageUrl + " )");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.isFavorite(ctx_r1.selectedArtwork.id) ? "\u2665" : "\u2661");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedArtwork.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selectedArtwork.artistName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u25F7 ", ctx_r1.selectedArtwork.year, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u25C9 ", ctx_r1.selectedArtwork.medium);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u25A1 ", ctx_r1.selectedArtwork.dimensions);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedArtwork.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedArtwork.story);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(23, 14, ctx_r1.selectedArtwork.saleType === "Auction" ? ctx_r1.selectedArtwork.currentPrice ?? 0 : ctx_r1.selectedArtwork.fixedPrice ?? 0));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.isFavorite(ctx_r1.selectedArtwork.id) ? "\u2665 Favorited" : "\u2661 Add to Favorites");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.selectedArtwork.saleType === "Fixed" && ctx_r1.selectedArtwork.status === "Available" ? 27 : ctx_r1.selectedArtwork.saleType === "Auction" ? 28 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(16, _c1, ctx_r1.selectedArtwork.galleryId));
} }
function ScreenComponent_Case_7_For_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const bid_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bid_r11.bidderName.slice(0, 2).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bid_r11.bidderName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 4, bid_r11.createdAt, "h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(10, 7, bid_r11.amount));
} }
function ScreenComponent_Case_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "h1");
    i0.ɵɵtext(3, "Live Auction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Place your bid and be part of the excitement!");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "section", 70);
    i0.ɵɵelement(7, "div", 71);
    i0.ɵɵelementStart(8, "div", 72)(9, "div", 73)(10, "b");
    i0.ɵɵtext(11, "Auction Ends In");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 74)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Days");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Hours");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24, "Min");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "span");
    i0.ɵɵtext(26);
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Sec");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(29, "p", 75);
    i0.ɵɵtext(30, "Current Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "h2", 76);
    i0.ɵɵtext(32);
    i0.ɵɵpipe(33, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p", 77);
    i0.ɵɵtext(35, "\uD83C\uDFC6 Highest Bidder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p", 78)(37, "b");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "input", 79);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function ScreenComponent_Case_7_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.bidAmount, $event) || (ctx_r1.bidAmount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 80)(41, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_7_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.quickBid(100)); });
    i0.ɵɵtext(42, "+100");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_7_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.quickBid(500)); });
    i0.ɵɵtext(44, "+500");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_7_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.quickBid(1000)); });
    i0.ɵɵtext(46, "+1000");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "button", 81);
    i0.ɵɵlistener("click", function ScreenComponent_Case_7_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitBid()); });
    i0.ɵɵtext(48, "Place Bid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "p", 82);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 83)(52, "div", 15)(53, "h3");
    i0.ɵɵtext(54, "Bid History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "span");
    i0.ɵɵtext(56, "Highest first");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(57, ScreenComponent_Case_7_For_58_Template, 11, 9, "div", 84, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵstyleProp("background-image", "url(" + ctx_r1.auctionArtwork.imageUrl + " )");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.countdown.days);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.countdown.hours);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.countdown.minutes);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.countdown.seconds);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(33, 10, ctx_r1.auctionArtwork.currentPrice ?? 0));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.highestBidder);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.bidAmount);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r1.bidMessage);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.auctionBids);
} }
function ScreenComponent_Case_8_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 23);
    i0.ɵɵelement(1, "a", 24);
    i0.ɵɵelementStart(2, "div", 26)(3, "a", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 86);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementStart(8, "button", 60);
    i0.ɵɵlistener("click", function ScreenComponent_Case_8_For_10_Template_button_click_8_listener() { const art_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleFavorite(art_r13.id)); });
    i0.ɵɵtext(9, "\u2665");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const art_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + art_r13.imageUrl + " )");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, art_r13.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, art_r13.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(art_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" $", i0.ɵɵpipeBind1(7, 6, art_r13.saleType === "Auction" ? art_r13.currentPrice ?? 0 : art_r13.fixedPrice ?? 0), " ");
} }
function ScreenComponent_Case_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "h1");
    i0.ɵɵtext(3, "My Favorites");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Your favorite artworks");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "a", 16);
    i0.ɵɵtext(7, "View All \u2192");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 22);
    i0.ɵɵrepeaterCreate(9, ScreenComponent_Case_8_For_10_Template, 10, 12, "article", 23, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.favoriteArts);
} }
function ScreenComponent_Case_9_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵelement(2, "span", 88);
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td")(12, "span", 61);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r14 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(order_r14.artworkTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r14.orderType === "AuctionWin" ? "Auction Win" : "Direct Buy");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind1(10, 7, order_r14.finalPrice));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("complete", order_r14.status === "Completed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(order_r14.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 9, order_r14.createdAt, "MMM d, y"));
} }
function ScreenComponent_Case_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "h1");
    i0.ɵɵtext(3, "My Orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Track your purchases and orders");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 87)(7, "table")(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Artwork");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Order Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Final Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, ScreenComponent_Case_9_For_22_Template, 17, 12, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵrepeater(ctx_r1.service.orders);
} }
function ScreenComponent_Case_10_For_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 23);
    i0.ɵɵelement(1, "a", 24);
    i0.ɵɵelementStart(2, "div", 26)(3, "a", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 96)(6, "a", 97);
    i0.ɵɵtext(7, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 43);
    i0.ɵɵlistener("click", function ScreenComponent_Case_10_For_26_Template_button_click_8_listener() { const art_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteArtwork(art_r16.id)); });
    i0.ɵɵtext(9, "\u265C");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const art_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + art_r16.imageUrl + " )");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, art_r16.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, art_r16.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(art_r16.title);
} }
function ScreenComponent_Case_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "aside", 89)(2, "div", 90);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 91);
    i0.ɵɵtext(9, "\u25A7 My Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 16);
    i0.ɵɵtext(11, "\u25A4 My Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 92);
    i0.ɵɵtext(13, "\u25F7 My Auctions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 93);
    i0.ɵɵtext(15, "\u2659 Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 45);
    i0.ɵɵtext(17, "\u21E5 Logout");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "section", 94)(19, "div", 46)(20, "h1");
    i0.ɵɵtext(21, "My Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "a", 95);
    i0.ɵɵtext(23, "\uFF0B Add Artwork");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 22);
    i0.ɵɵrepeaterCreate(25, ScreenComponent_Case_10_For_26_Template, 10, 9, "article", 23, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.fullName.slice(0, 2).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.role);
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r1.myArtworks);
} }
function ScreenComponent_Case_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "aside", 89)(2, "div", 90);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 56);
    i0.ɵɵtext(9, "\u25A7 My Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 16);
    i0.ɵɵtext(11, "\u25A4 My Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 92);
    i0.ɵɵtext(13, "\u25F7 My Auctions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 93);
    i0.ɵɵtext(15, "\u2659 Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 45);
    i0.ɵɵtext(17, "\u21E5 Logout");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "section", 94)(19, "h1");
    i0.ɵɵtext(20, "Add New Artwork");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "form", 98);
    i0.ɵɵlistener("ngSubmit", function ScreenComponent_Case_11_Template_form_ngSubmit_21_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveArtwork()); });
    i0.ɵɵelementStart(22, "div")(23, "label");
    i0.ɵɵtext(24, "Title *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 99);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "label");
    i0.ɵɵtext(27, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "textarea", 100);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "label");
    i0.ɵɵtext(30, "Upload Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "label", 101);
    i0.ɵɵtext(32, "\u21E7");
    i0.ɵɵelementStart(33, "b");
    i0.ɵɵtext(34, "Upload Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "input", 102);
    i0.ɵɵlistener("change", function ScreenComponent_Case_11_Template_input_change_37_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFileSelected($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 103)(39, "h3");
    i0.ɵɵtext(40, "Artwork Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 104)(42, "div")(43, "label");
    i0.ɵɵtext(44, "Year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 105);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div")(47, "label");
    i0.ɵɵtext(48, "Medium");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "input", 106);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "label");
    i0.ɵɵtext(51, "Dimensions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "input", 107);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "label");
    i0.ɵɵtext(54, "Sale Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "select", 108);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(56, "option", 109);
    i0.ɵɵtext(57, "Fixed Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "option", 110);
    i0.ɵɵtext(59, "Auction");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "label");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "input", 111);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "button", 36);
    i0.ɵɵtext(64, "Save Artwork");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.fullName.slice(0, 2).toUpperCase());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.service.currentUser.role);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("formGroup", ctx_r1.artworkForm);
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("(", ctx_r1.selectedFileName || "Click to browse", ")");
    i0.ɵɵadvance(9);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.artworkForm.value.saleType === "Auction" ? "Starting Price" : "Fixed Price");
    i0.ɵɵadvance();
    i0.ɵɵcontrol();
} }
function ScreenComponent_Case_12_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23);
    i0.ɵɵelement(1, "a", 24);
    i0.ɵɵelementStart(2, "div", 26)(3, "a", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const art_r19 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + art_r19.imageUrl + " )");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, art_r19.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c0, art_r19.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(art_r19.title);
} }
function ScreenComponent_Case_12_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 120);
    i0.ɵɵlistener("ngSubmit", function ScreenComponent_Case_12_Conditional_23_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveProfile()); });
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Edit Profile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label");
    i0.ɵɵtext(4, "Full Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 121);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label");
    i0.ɵɵtext(7, "Bio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "textarea", 122);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 123);
    i0.ɵɵtext(10, "Save Changes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r1.profileForm);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
} }
function ScreenComponent_Case_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 4)(1, "div", 112)(2, "div", 113);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 114);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 115);
    i0.ɵɵlistener("click", function ScreenComponent_Case_12_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openProfileEdit()); });
    i0.ɵɵtext(11, " \u270E Edit Profile ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 116)(13, "div", 117)(14, "button", 118);
    i0.ɵɵtext(15, "My Artworks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 16);
    i0.ɵɵtext(17, "My Galleries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 92);
    i0.ɵɵtext(19, "My Orders");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 22);
    i0.ɵɵrepeaterCreate(21, ScreenComponent_Case_12_For_22_Template, 5, 9, "article", 23, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(23, ScreenComponent_Case_12_Conditional_23_Template, 11, 1, "form", 119);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", (ctx_r1.currentUser?.fullName ?? "").slice(0, 2).toUpperCase(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.currentUser?.fullName ?? "Loading...");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.currentUser?.role ?? "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.currentUser?.bio ?? "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.currentUser);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r1.myArtworks.slice(0, 3));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.profileEditing ? 23 : -1);
} }
export class ScreenComponent {
    service = inject(ArtvistaService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    fb = inject(FormBuilder);
    auth = inject(AuthService);
    userService = inject(UserService);
    currentUser = null;
    currentPage = 'home';
    searchTerm = '';
    bidAmount = 3300;
    bidMessage = '';
    profileEditing = false;
    selectedFileName = '';
    selectedImageFile = null;
    galleryId = 1;
    artworkId = 1;
    clockTick = 0;
    loginForm = this.fb.nonNullable.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
    registerForm = this.fb.nonNullable.group({
        role: ['Collector'],
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });
    artworkForm = this.fb.nonNullable.group({
        title: ['', Validators.required],
        story: [''],
        year: [2025],
        medium: ['Oil on Canvas'],
        dimensions: ['80 × 100 cm'],
        saleType: ['Fixed'],
        price: [2500]
    });
    // يبدأ النموذج فارغًا، ثم تُحمّل بيانات المستخدم من API
    profileForm = this.fb.nonNullable.group({
        fullName: ['', Validators.required],
        bio: ['']
    });
    clockSub;
    ngOnInit() {
        this.service.loadCatalog();
        this.clockSub = interval(1000).subscribe(() => this.clockTick++);
        this.route.data.subscribe(data => {
            this.currentPage = data['screen'];
            console.log('CURRENT SCREEN:', this.currentPage);
            if (this.currentPage === 'auctions') {
                setTimeout(() => { if (this.auctionArtwork?.id)
                    this.service.loadBids(this.auctionArtwork.id); }, 0);
            }
        });
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')) || 1;
            if (this.currentPage === 'gallery-details')
                this.galleryId = id;
            if (this.currentPage === 'artwork-details')
                this.artworkId = id;
        });
        if (this.auth.isLoggedIn()) {
            this.userService.getMe().subscribe({
                next: (user) => {
                    const roleNames = ['Collector', 'Artist', 'Admin'];
                    this.currentUser = {
                        ...user,
                        id: user.userId ?? user.id,
                        role: typeof user.role === 'number' ? roleNames[user.role - 1] : user.role
                    };
                    this.service.currentUser = this.currentUser;
                    this.service.loadUserData();
                    this.profileForm.patchValue({
                        fullName: user.fullName ?? '',
                        bio: user.bio ?? ''
                    });
                },
                error: (err) => {
                    console.error('Failed to load profile:', err);
                }
            });
        }
    }
    ngOnDestroy() {
        this.clockSub?.unsubscribe();
    }
    openProfileEdit() {
        if (!this.currentUser)
            return;
        this.profileForm.patchValue({
            fullName: this.currentUser.fullName,
            bio: this.currentUser.bio ?? ''
        });
        this.profileEditing = true;
    }
    get arts() {
        return this.service.artworks;
    }
    get filteredGalleries() {
        return this.service.galleries.filter(g => g.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    get selectedGallery() {
        return this.service.getGallery(this.galleryId);
    }
    get galleryArts() {
        return this.service.getGalleryArtworks(this.galleryId);
    }
    get selectedArtwork() {
        return this.service.getArtwork(this.artworkId);
    }
    get favoriteArts() {
        const ids = this.service.favoriteIds$.value;
        return this.arts.filter(a => ids.includes(a.id));
    }
    get myArtworks() {
        return this.arts.filter(a => a.artistId === this.service.currentUser.id);
    }
    get auctionArtwork() {
        return this.arts.find(a => a.saleType === 'Auction' && a.status === 'InAuction') ?? this.arts[1] ?? this.service.getArtwork(0);
    }
    get auctionBids() {
        return this.service.getBidsForArtwork(this.auctionArtwork.id);
    }
    get highestBidder() {
        return this.auctionBids[0]?.bidderName ?? 'No bids yet';
    }
    get isFavorite() {
        return (id) => this.service.favoriteIds$.value.includes(id);
    }
    get countdown() {
        const end = new Date(this.auctionArtwork.auctionEndTime ?? Date.now()).getTime();
        const diff = Math.max(0, end - Date.now());
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor(diff % 86400000 / 3600000),
            minutes: Math.floor(diff % 3600000 / 60000),
            seconds: Math.floor(diff % 60000 / 1000)
        };
    }
    toggleFavorite(id) {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        this.service.toggleFavorite(id).subscribe({
            error: err => { console.error(err); alert(err.error || 'Favorite update failed.'); }
        });
    }
    quickBid(amount) {
        this.bidAmount = (this.auctionArtwork.currentPrice ?? 0) + amount;
    }
    submitBid() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        this.service.placeBid(this.auctionArtwork.id, Number(this.bidAmount)).subscribe({
            next: () => {
                this.bidMessage = 'Your bid has been placed successfully.';
                this.service.loadCatalog();
                this.service.loadBids(this.auctionArtwork.id);
            },
            error: err => { console.error(err); this.bidMessage = err.error || 'Bid could not be placed.'; }
        });
    }
    buyNow(artworkId) {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        this.service.buyDirectly(artworkId).subscribe({
            next: () => this.router.navigate(['/orders']),
            error: err => { console.error(err); alert(err.error || 'Purchase failed.'); }
        });
    }
    login() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        const { email, password } = this.loginForm.getRawValue();
        this.auth.login(email, password).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.error('Login failed:', err);
                alert('Login failed. Please check your email and password.');
            }
        });
    }
    register() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const data = this.registerForm.getRawValue();
        this.auth.register(data).subscribe({
            next: () => {
                alert('Registration successful. Please login.');
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.error('Registration failed:', err);
                alert('Registration failed. Please try again.');
            }
        });
    }
    saveArtwork() {
        if (this.artworkForm.invalid) {
            this.artworkForm.markAllAsTouched();
            return;
        }
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }
        const v = this.artworkForm.getRawValue();
        const isAuction = v.saleType === 'Auction';
        this.service.addArtwork({
            title: v.title,
            story: v.story,
            year: Number(v.year),
            medium: v.medium,
            dimensions: v.dimensions,
            saleType: v.saleType,
            fixedPrice: isAuction ? undefined : Number(v.price),
            startingPrice: isAuction ? Number(v.price) : undefined,
            auctionEndTime: isAuction ? new Date(Date.now() + 86400000).toISOString() : undefined
        }, this.selectedImageFile).subscribe({
            next: () => { alert('Artwork saved to the database.'); this.router.navigate(['/artist']); },
            error: err => { console.error(err); alert(err.error || 'Could not save artwork. Check that you own a gallery and that the API is running.'); }
        });
    }
    onFileSelected(event) {
        const file = event.target.files?.[0] ?? null;
        this.selectedImageFile = file;
        this.selectedFileName = file?.name ?? '';
    }
    deleteArtwork(id) {
        if (!confirm('Delete this artwork?'))
            return;
        this.service.deleteArtwork(id).subscribe({
            next: () => alert('Artwork deleted from the database.'),
            error: err => { console.error(err); alert(err.error || 'Could not delete artwork.'); }
        });
    }
    saveProfile() {
        if (this.profileForm.invalid) {
            this.profileForm.markAllAsTouched();
            return;
        }
        const updatedData = this.profileForm.getRawValue();
        if (!this.currentUser)
            return;
        this.userService.update(this.currentUser.id, {
            fullName: updatedData.fullName,
            email: this.currentUser.email,
            bio: updatedData.bio,
            profileImageUrl: this.currentUser.profileImageUrl
        }).subscribe({
            next: () => {
                this.currentUser = { ...this.currentUser, ...updatedData };
                this.service.currentUser = this.currentUser;
                this.profileEditing = false;
                alert('Profile updated in the database.');
            },
            error: err => { console.error(err); alert(err.error || 'Profile update failed.'); }
        });
    }
    static ɵfac = function ScreenComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScreenComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScreenComponent, selectors: [["app-screen"]], decls: 13, vars: 3, consts: [[1, "page-wrap"], [1, "auth-layout"], [1, "detail-card"], [1, "artist-layout"], [1, "profile-layout"], [1, "hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-sub"], ["routerLink", "/galleries", 1, "btn", "gold"], [1, "hero-art"], [1, "art-frame", "frame-one"], [1, "art-frame", "frame-two"], [1, "art-frame", "frame-three"], [1, "collection-panel"], [1, "section-head"], ["routerLink", "/galleries"], [1, "collection-grid"], ["routerLink", "/galleries/1", 1, "collection-card", "grad-one"], ["routerLink", "/galleries/2", 1, "collection-card", "grad-two"], ["routerLink", "/galleries/3", 1, "collection-card", "grad-three"], [1, "section"], [1, "art-grid"], [1, "art-card"], [1, "art-thumb", 3, "routerLink"], [1, "art-label"], [1, "art-info"], [1, "art-title", 3, "routerLink"], [1, "auth-art"], [1, "brand-mark", "large"], [1, "auth-form"], [1, "muted"], [3, "ngSubmit", "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "Email Address"], [4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["type", "submit", 1, "btn", "gold", "full"], [1, "or"], ["routerLink", "/register", 1, "btn", "outline", "full"], [1, "form-note"], [1, "auth-art", "register-art"], [1, "soft-orb"], [1, "role-switch"], ["type", "button", 3, "click"], ["formControlName", "fullName", "placeholder", "Full Name"], ["routerLink", "/login"], [1, "page-heading"], ["placeholder", "Search galleries...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "gallery-grid"], [1, "gallery-card", 3, "routerLink"], [1, "gallery-cover", 3, "ngClass"], [1, "gallery-card-foot"], ["routerLink", "/galleries", 1, "back-link"], [1, "gallery-detail"], [1, "gallery-detail-cover", 3, "ngClass"], [1, "meta"], ["routerLink", "/artist"], [1, "art-grid", "six"], [1, "detail-image"], [1, "detail-copy"], [1, "heart", 3, "click"], [1, "status-pill"], [1, "story"], [1, "price"], [1, "button-row"], [1, "btn", "outline", 3, "click"], [1, "btn", "gold"], ["routerLink", "/auctions", 1, "btn", "gold"], [1, "btn", "navy", 3, "routerLink"], [1, "btn", "gold", 3, "click"], [1, "auction-layout"], [1, "auction-art"], [1, "auction-middle"], [1, "countdown"], [1, "timer"], [1, "muted", "center"], [1, "auction-price"], [1, "center", "muted"], [1, "center"], ["type", "number", "placeholder", "$ Enter your bid amount", 3, "ngModelChange", "ngModel"], [1, "quick-bids"], ["type", "button", 1, "btn", "gold", "full", 3, "click"], [1, "feedback"], [1, "bid-history"], [1, "bid-row"], [1, "mini-avatar"], [1, "price-line"], [1, "table-card"], [1, "table-art"], [1, "artist-sidebar"], [1, "avatar", "big"], [1, "side-active"], ["routerLink", "/orders"], ["routerLink", "/profile"], [1, "artist-content"], ["routerLink", "/artworks/new", 1, "btn", "gold"], [1, "card-actions"], ["routerLink", "/artworks/new"], [1, "artwork-form", 3, "ngSubmit", "formGroup"], ["formControlName", "title", "placeholder", "Enter artwork title"], ["formControlName", "story", "placeholder", "Describe your artwork..."], [1, "upload-box"], ["type", "file", "accept", "image/*", 3, "change"], [1, "form-panel"], [1, "two-fields"], ["type", "number", "formControlName", "year"], ["formControlName", "medium"], ["formControlName", "dimensions"], ["formControlName", "saleType"], ["value", "Fixed"], ["value", "Auction"], ["type", "number", "formControlName", "price"], [1, "profile-card"], [1, "avatar", "profile-avatar"], [1, "bio"], ["type", "button", 1, "btn", "gold", 3, "click", "disabled"], [1, "profile-main"], [1, "tabs"], [1, "tab-active"], [1, "profile-edit", 3, "formGroup"], [1, "profile-edit", 3, "ngSubmit", "formGroup"], ["formControlName", "fullName"], ["formControlName", "bio"], ["type", "submit", 1, "btn", "gold"]], template: function ScreenComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, ScreenComponent_Case_1_Template, 43, 0)(2, ScreenComponent_Case_2_Template, 36, 3, "div", 1)(3, ScreenComponent_Case_3_Template, 23, 5, "div", 1)(4, ScreenComponent_Case_4_Template, 10, 1)(5, ScreenComponent_Case_5_Template, 23, 5)(6, ScreenComponent_Case_6_Template, 31, 18, "section", 2)(7, ScreenComponent_Case_7_Template, 59, 12)(8, ScreenComponent_Case_8_Template, 11, 0)(9, ScreenComponent_Case_9_Template, 23, 0)(10, ScreenComponent_Case_10_Template, 27, 3, "div", 3)(11, ScreenComponent_Case_11_Template, 65, 6, "div", 3)(12, ScreenComponent_Case_12_Template, 24, 6, "section", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵclassProp("wide", ctx.currentPage === "home" || ctx.currentPage === "galleries" || ctx.currentPage === "favorites" || ctx.currentPage === "orders" || ctx.currentPage === "auctions");
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_1_0 = ctx.currentPage) === "home" ? 1 : tmp_1_0 === "login" ? 2 : tmp_1_0 === "register" ? 3 : tmp_1_0 === "galleries" ? 4 : tmp_1_0 === "gallery-details" ? 5 : tmp_1_0 === "artwork-details" ? 6 : tmp_1_0 === "auctions" ? 7 : tmp_1_0 === "favorites" ? 8 : tmp_1_0 === "orders" ? 9 : tmp_1_0 === "artist" ? 10 : tmp_1_0 === "add-artwork" ? 11 : tmp_1_0 === "profile" ? 12 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, RouterLink, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, FormsModule, i2.NgModel, i1.DecimalPipe, i1.DatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenComponent, [{
        type: Component,
        args: [{
                selector: 'app-screen',
                standalone: true,
                imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
                template: `
<div class="page-wrap" [class.wide]="currentPage==='home' || currentPage==='galleries' || currentPage==='favorites' || currentPage==='orders' || currentPage==='auctions'">
  @switch (currentPage) {

    @case ('home') {
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">THE ART OF DISCOVERY</p>
          <h1>Digital Art Gallery &<br>Live Auction</h1>
          <p class="hero-sub">Discover. Collect. Own.</p>
          <a class="btn gold" routerLink="/galleries">Explore Art <span>→</span></a>
        </div>
        <div class="hero-art">
          <div class="art-frame frame-one"></div>
          <div class="art-frame frame-two"></div>
          <div class="art-frame frame-three"></div>
        </div>
      </section>

      <section class="collection-panel">
        <div class="section-head">
          <h2>Featured Collections</h2>
          <a routerLink="/galleries">View All →</a>
        </div>
        <div class="collection-grid">
          <a class="collection-card grad-one" routerLink="/galleries/1"><span>Contemporary Art</span></a>
          <a class="collection-card grad-two" routerLink="/galleries/2"><span>Nature's Beauty</span></a>
          <a class="collection-card grad-three" routerLink="/galleries/3"><span>Abstract Magic</span></a>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>Featured Artworks</h2>
          <a routerLink="/galleries">Explore all →</a>
        </div>
        <div class="art-grid">
          @for (art of arts.slice(0,3); track art.id) {
            <article class="art-card">
              <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'">
                <span class="art-label">{{art.status}}</span>
              </a>
              <div class="art-info">
                <a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a>
                <span>{{art.artistName}}</span>
                <strong>{{art.saleType==='Auction' ? '$'+(art.currentPrice ?? 0) : '$'+(art.fixedPrice ?? 0)}}</strong>
              </div>
            </article>
          }
        </div>
      </section>
    }

    @case ('login') {
      <div class="auth-layout">
        <div class="auth-art">
          <div class="brand-mark large">A</div>
          <h2>ArtVista</h2>
          <p>Digital Art Gallery</p>
          <span>Step into the world<br>of fine art</span>
        </div>
        <div class="auth-form">
          <h1>Welcome Back</h1>
          <p class="muted">Sign in to your account</p>
          <form [formGroup]="loginForm" (ngSubmit)="login()">
            <label>Email Address</label>
            <input formControlName="email" type="email" placeholder="Email Address">
            <small *ngIf="loginForm.controls.email.touched && loginForm.controls.email.invalid">Enter a valid email address.</small>
            <label>Password</label>
            <input formControlName="password" type="password" placeholder="Password">
            <small *ngIf="loginForm.controls.password.touched && loginForm.controls.password.invalid">Password is required.</small>
            <button class="btn gold full" type="submit">Login</button>
          </form>
          <div class="or"><span></span>or<span></span></div>
          <a class="btn outline full" routerLink="/register">Create an Account</a>
          <p class="form-note">Sign in with your registered ArtVista account.</p>
        </div>
      </div>
    }

    @case ('register') {
      <div class="auth-layout">
        <div class="auth-art register-art"><div class="soft-orb"></div></div>
        <div class="auth-form">
          <h1>Create Your Account</h1>
          <p class="muted">Join our art community</p>
          <form [formGroup]="registerForm" (ngSubmit)="register()">
            <div class="role-switch">
              <button type="button" [class.selected]="registerForm.value.role==='Collector'" (click)="registerForm.patchValue({role:'Collector'})">Collector</button>
              <button type="button" [class.selected]="registerForm.value.role==='Artist'" (click)="registerForm.patchValue({role:'Artist'})">Artist</button>
            </div>
            <input formControlName="fullName" placeholder="Full Name">
            <input formControlName="email" type="email" placeholder="Email Address">
            <input formControlName="password" type="password" placeholder="Password">
            <button class="btn gold full" type="submit">Register</button>
          </form>
          <p class="form-note">Already have an account? <a routerLink="/login">Login</a></p>
        </div>
      </div>
    }

    @case ('galleries') {
      <div class="page-heading">
        <div><h1>Our Galleries</h1><p>Explore curated art exhibitions</p></div>
        <input class="search-input" [(ngModel)]="searchTerm" placeholder="Search galleries...">
      </div>
      <div class="gallery-grid">
        @for (gallery of filteredGalleries; track gallery.id) {
          <a class="gallery-card" [routerLink]="['/galleries',gallery.id]">
            <div class="gallery-cover" [ngClass]="'grad-'+(gallery.id===1?'one':gallery.id===2?'two':'three')"></div>
            <div class="gallery-card-foot"><h3>{{gallery.title}}</h3><span>→</span></div>
          </a>
        }
      </div>
    }

    @case ('gallery-details') {
      <a class="back-link" routerLink="/galleries">← Back to Galleries</a>
      <section class="gallery-detail">
        <div class="gallery-detail-cover" [ngClass]="'grad-'+(selectedGallery.id===1?'one':selectedGallery.id===2?'two':'three')"></div>
        <div>
          <h1>{{selectedGallery.title}} Exhibition</h1>
          <p>{{selectedGallery.story}}</p>
          <div class="meta">▧ {{galleryArts.length}} Artworks <span>Created by: <b>{{service.currentUser.fullName}}</b></span></div>
        </div>
      </section>
      <div class="section-head"><h2>Gallery Artworks</h2><a routerLink="/artist">Edit Gallery (owner)</a></div>
      <div class="art-grid six">
        @for (art of galleryArts; track art.id) {
          <article class="art-card">
            <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
            <div class="art-info"><a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a></div>
          </article>
        }
      </div>
    }

    @case ('artwork-details') {
      <section class="detail-card">
        <div class="detail-image" [style.background-image]="'url(' + selectedArtwork.imageUrl + ' )'"></div>
        <div class="detail-copy">
          <button class="heart" (click)="toggleFavorite(selectedArtwork.id)">{{isFavorite(selectedArtwork.id)?'♥':'♡'}}</button>
          <h1>{{selectedArtwork.title}}</h1>
          <p>By <b>{{selectedArtwork.artistName}}</b></p>
          <div class="meta">◷ {{selectedArtwork.year}} <span>◉ {{selectedArtwork.medium}}</span><span>□ {{selectedArtwork.dimensions}}</span></div>
          <span class="status-pill">{{selectedArtwork.status}}</span>
          <p class="story">{{selectedArtwork.story}}</p>
          <h2 class="price">&#36;{{(selectedArtwork.saleType==='Auction' ? (selectedArtwork.currentPrice ?? 0) : (selectedArtwork.fixedPrice ?? 0)) | number}}</h2>
          <div class="button-row">
            <button class="btn outline" (click)="toggleFavorite(selectedArtwork.id)">{{isFavorite(selectedArtwork.id)?'♥ Favorited':'♡ Add to Favorites'}}</button>
            @if (selectedArtwork.saleType === 'Fixed' && selectedArtwork.status === 'Available') {
              <button class="btn gold" (click)="buyNow(selectedArtwork.id)">Buy Now</button>
            } @else if (selectedArtwork.saleType === 'Auction') {
              <a class="btn gold" routerLink="/auctions">Go to Live Auction</a>
            }
          </div>
          <a class="btn navy" [routerLink]="['/galleries',selectedArtwork.galleryId]">View Gallery</a>
        </div>
      </section>
    }

    @case ('auctions') {
      <div class="page-heading"><div><h1>Live Auction</h1><p>Place your bid and be part of the excitement!</p></div></div>
      <section class="auction-layout">
        <div class="auction-art" [style.background-image]="'url(' + auctionArtwork.imageUrl + ' )'"></div>
        <div class="auction-middle">
          <div class="countdown">
            <b>Auction Ends In</b>
            <div class="timer">
              <span>{{countdown.days}}<small>Days</small></span>
              <span>{{countdown.hours}}<small>Hours</small></span>
              <span>{{countdown.minutes}}<small>Min</small></span>
              <span>{{countdown.seconds}}<small>Sec</small></span>
            </div>
          </div>
          <p class="muted center">Current Price</p>
          <h2 class="auction-price">&#36;{{(auctionArtwork.currentPrice ?? 0) | number}}</h2>
          <p class="center muted">🏆 Highest Bidder</p>
          <p class="center"><b>{{highestBidder}}</b></p>
          <input type="number" [(ngModel)]="bidAmount" placeholder="$ Enter your bid amount">
          <div class="quick-bids">
            <button type="button" (click)="quickBid(100)">+100</button>
            <button type="button" (click)="quickBid(500)">+500</button>
            <button type="button" (click)="quickBid(1000)">+1000</button>
          </div>
          <button class="btn gold full" type="button" (click)="submitBid()">Place Bid</button>
          <p class="feedback">{{bidMessage}}</p>
        </div>
        <div class="bid-history">
          <div class="section-head"><h3>Bid History</h3><span>Highest first</span></div>
          @for (bid of auctionBids; track bid.id) {
            <div class="bid-row">
              <span class="mini-avatar">{{bid.bidderName.slice(0,2).toUpperCase()}}</span>
              <div>{{bid.bidderName}}<small>{{bid.createdAt | date:'h:mm a'}}</small></div>
              <b>&#36;{{bid.amount | number}}</b>
            </div>
          }
        </div>
      </section>
    }

    @case ('favorites') {
      <div class="page-heading"><div><h1>My Favorites</h1><p>Your favorite artworks</p></div><a routerLink="/galleries">View All →</a></div>
      <div class="art-grid">
        @for (art of favoriteArts; track art.id) {
          <article class="art-card">
            <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
            <div class="art-info">
              <a [routerLink]="['/artworks',art.id]" class="art-title">{{art.title}}</a>
              <div class="price-line">
                &#36;{{(art.saleType==='Auction' ? (art.currentPrice ?? 0) : (art.fixedPrice ?? 0)) | number}}
                <button class="heart" (click)="toggleFavorite(art.id)">♥</button>
              </div>
            </div>
          </article>
        }
      </div>
    }

    @case ('orders') {
      <div class="page-heading"><div><h1>My Orders</h1><p>Track your purchases and orders</p></div></div>
      <div class="table-card">
        <table>
          <thead><tr><th>Artwork</th><th>Order Type</th><th>Final Price</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            @for (order of service.orders; track order.id) {
              <tr>
                <td><span class="table-art"></span><b>{{order.artworkTitle}}</b></td>
                <td>{{order.orderType==='AuctionWin'?'Auction Win':'Direct Buy'}}</td>
                <td><b>&#36;{{order.finalPrice | number}}</b></td>
                <td><span class="status-pill" [class.complete]="order.status==='Completed'">{{order.status}}</span></td>
                <td>{{order.createdAt | date:'MMM d, y'}}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }

    @case ('artist') {
      <div class="artist-layout">
        <aside class="artist-sidebar">
          <div class="avatar big">{{service.currentUser.fullName.slice(0,2).toUpperCase()}}</div>
          <h3>{{service.currentUser.fullName}}</h3><p>{{service.currentUser.role}}</p>
          <a class="side-active">▧ My Artworks</a>
          <a routerLink="/galleries">▤ My Galleries</a>
          <a routerLink="/orders">◷ My Auctions</a>
          <a routerLink="/profile">♙ Profile</a>
          <a routerLink="/login">⇥ Logout</a>
        </aside>
        <section class="artist-content">
          <div class="page-heading"><h1>My Artworks</h1><a class="btn gold" routerLink="/artworks/new">＋ Add Artwork</a></div>
          <div class="art-grid">
            @for (art of myArtworks; track art.id) {
              <article class="art-card">
                <a [routerLink]="['/artworks',art.id]" class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
                <div class="art-info">
                  <a class="art-title" [routerLink]="['/artworks',art.id]">{{art.title}}</a>
                  <div class="card-actions"><a routerLink="/artworks/new">✎</a><button type="button" (click)="deleteArtwork(art.id)">♜</button></div>
                </div>
              </article>
            }
          </div>
        </section>
      </div>
    }

    @case ('add-artwork') {
      <div class="artist-layout">
        <aside class="artist-sidebar">
          <div class="avatar big">{{service.currentUser.fullName.slice(0,2).toUpperCase()}}</div>
          <h3>{{service.currentUser.fullName}}</h3><p>{{service.currentUser.role}}</p>
          <a routerLink="/artist">▧ My Artworks</a>
          <a routerLink="/galleries">▤ My Galleries</a>
          <a routerLink="/orders">◷ My Auctions</a>
          <a routerLink="/profile">♙ Profile</a>
          <a routerLink="/login">⇥ Logout</a>
        </aside>
        <section class="artist-content">
          <h1>Add New Artwork</h1>
          <form [formGroup]="artworkForm" (ngSubmit)="saveArtwork()" class="artwork-form">
            <div>
              <label>Title *</label><input formControlName="title" placeholder="Enter artwork title">
              <label>Description</label><textarea formControlName="story" placeholder="Describe your artwork..."></textarea>
              <label>Upload Image</label>
              <label class="upload-box">⇧<b>Upload Image</b><small>({{selectedFileName || 'Click to browse'}})</small><input type="file" accept="image/*" (change)="onFileSelected($event)"></label>
            </div>
            <div class="form-panel">
              <h3>Artwork Details</h3>
              <div class="two-fields">
                <div><label>Year</label><input type="number" formControlName="year"></div>
                <div><label>Medium</label><input formControlName="medium"></div>
              </div>
              <label>Dimensions</label><input formControlName="dimensions">
              <label>Sale Type</label>
              <select formControlName="saleType"><option value="Fixed">Fixed Price</option><option value="Auction">Auction</option></select>
              <label>{{artworkForm.value.saleType==='Auction'?'Starting Price':'Fixed Price'}}</label>
              <input type="number" formControlName="price">
              <button class="btn gold full" type="submit">Save Artwork</button>
            </div>
          </form>
        </section>
      </div>
    }

    @case ('profile') {
      <section class="profile-layout">
        <div class="profile-card">
          <div class="avatar profile-avatar">
            {{(currentUser?.fullName ?? '').slice(0,2).toUpperCase()}}
          </div>

          <h2>{{currentUser?.fullName ?? 'Loading...'}}</h2>
          <p>{{currentUser?.role ?? ''}}</p>
          <p class="bio">{{currentUser?.bio ?? ''}}</p>

          <button class="btn gold" type="button"
            [disabled]="!currentUser"
            (click)="openProfileEdit()">
            ✎ Edit Profile
          </button>
        </div>

        <div class="profile-main">
          <div class="tabs">
            <button class="tab-active">My Artworks</button>
            <a routerLink="/galleries">My Galleries</a>
            <a routerLink="/orders">My Orders</a>
          </div>

          <div class="art-grid">
            @for (art of myArtworks.slice(0,3); track art.id) {
              <article class="art-card">
                <a [routerLink]="['/artworks',art.id]"
                  class="art-thumb" [style.background-image]="'url(' + art.imageUrl + ' )'"></a>
                <div class="art-info">
                  <a class="art-title" [routerLink]="['/artworks',art.id]">{{art.title}}</a>
                </div>
              </article>
            }
          </div>

          @if(profileEditing) {
            <form [formGroup]="profileForm" class="profile-edit"
              (ngSubmit)="saveProfile()">
              <h3>Edit Profile</h3>
              <label>Full Name</label>
              <input formControlName="fullName">
              <label>Bio</label>
              <textarea formControlName="bio"></textarea>
              <button class="btn gold" type="submit">Save Changes</button>
            </form>
          }
        </div>
      </section>
    }
  }
</div>
`
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScreenComponent, { className: "ScreenComponent", filePath: "src/app/pages/screen.component.ts", lineNumber: 375 }); })();

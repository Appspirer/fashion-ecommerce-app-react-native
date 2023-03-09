import React from "react";
import arrow_right_white from '../assets/svgs/arrow_right_white.svg'
import arrow_right from '../assets/svgs/arrow_right.svg'
import arrow_right_black from '../assets/svgs/arrow_right_black.svg'
import fb_icon from '../assets/svgs/fb_icon.svg'
import google_icon from '../assets/svgs/google_icon.svg'
import logo from '../assets/svgs/logo.svg'
import lock from '../assets/svgs/lock.svg'
import mail from '../assets/svgs/mail.svg'
import check from '../assets/svgs/check.svg'
import profile from '../assets/svgs/profile.svg'
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import cart from '../assets/svgs/cart.svg'
import cart_focus from '../assets/svgs/cart_focus.svg'
import heart from '../assets/svgs/heart.svg'
import heart_focus from '../assets/svgs/heart_focus.svg'
import account from '../assets/svgs/account.svg'
import account_focus from '../assets/svgs/account_focus.svg'
import ellipse from '../assets/svgs/ellipse.svg'
import bell from '../assets/svgs/bell.svg'
import location from '../assets/svgs/location.svg'
import menu from '../assets/svgs/menu.svg'
import search from '../assets/svgs/search.svg'
import filter from '../assets/svgs/filter.svg'
import favorite from '../assets/svgs/favorite.svg'
import favorite_focus from '../assets/svgs/favorite_focus.svg'
import ic_x from '../assets/svgs/ic_x.svg'
import heart_details from '../assets/svgs/heart_details.svg'
import arrow_left from '../assets/svgs/arrow_left.svg'
import plus from '../assets/svgs/plus.svg'
import minus from '../assets/svgs/minus.svg'
import edit from '../assets/svgs/edit.svg'
import next_arrow from '../assets/svgs/next_arrow.svg'
import check_orange from '../assets/svgs/check_orange.svg'
import my_order from '../assets/svgs/my_order.svg'
import privacy_policy from '../assets/svgs/privacy_policy.svg'
import settings from '../assets/svgs/settings.svg'
import wallets from '../assets/svgs/wallets.svg'
import about_us from '../assets/svgs/about_us.svg'
import log_out from '../assets/svgs/log_out.svg'
import my_favorites from '../assets/svgs/my_favorites.svg'
import option from '../assets/svgs/option.svg'
import star from '../assets/svgs/star.svg'
import Bag from '../assets/svgs/Bag.svg'
import Ticket from '../assets/svgs/Ticket.svg'
import mark_question from '../assets/svgs/mark_question.svg'
import notify from '../assets/svgs/notify.svg'
import update from '../assets/svgs/update.svg'
import mail_orange from '../assets/svgs/mail_orange.svg'
import next_arrow_gray from '../assets/svgs/next_arrow_gray.svg'

const SVGs = {
    arrow_right,
    arrow_right_white,
    fb_icon,
    google_icon,
    lock,
    logo,
    mail,
    check,
    profile,
    home,
    home_focus,
    cart,
    cart_focus,
    heart,
    heart_focus,
    account,
    account_focus,
    ellipse,
    bell,
    location,
    menu,
    search,
    filter,
    arrow_right_black,
    favorite,
    favorite_focus,
    ic_x,
    arrow_left,
    heart_details,
    plus,
    minus,
    edit,
    next_arrow,
    check_orange,
    my_favorites,
    my_order,
    privacy_policy,
    settings,
    wallets,
    about_us,
    log_out,
    option,
    star,
    Bag,
    Ticket,
    mark_question,
    mail_orange,
    notify,
    update,
    next_arrow_gray
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}
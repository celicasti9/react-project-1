import React from "react";

function Sidebar() {
    return (
        <nav id="navbar">
      <ul class="navbar-items flexbox-col">
        <li class="navbar-logo flexbox-left">

        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <span class="link-text">Search</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <span class="link-text">Home</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="folder-open-outline"></ion-icon>
            </div>
            <span class="link-text">Projects</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="pie-chart-outline"></ion-icon>
            </div>
            <span class="link-text">Dashboard</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <span class="link-text">Team</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
            <span class="link-text">Support</span>
          </a>
        </li>
        <li class="navbar-item flexbox-left">
          <a class="navbar-item-inner flexbox-left">
            <div class="navbar-item-inner-icon-wrapper flexbox">
              <ion-icon name="settings-outline"></ion-icon>
            </div>
            <span class="link-text">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
    )
}

export default Sidebar;
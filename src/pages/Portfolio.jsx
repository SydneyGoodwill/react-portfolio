import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import amalganation from '../assets/amalganation.jpg';
import snapshot from '../assets/snapshot.png';
import refactor from '../assets/refactor.png';
import workdayscheduler from '../assets/workdayscheduler.gif';

const Portfolio = () => {
    return (
      <div class="big-container">
        
        <p class="portfolio">You can view all of my code repositories on my  <a href="https://github.com/SydneyGoodwill">GitHub</a> profile!</p>
        <div class="card-container">
          <div class="col-mb-4">
            <div class="card-main">
              <img src={snapshot} class="card-img-top" alt="Snapshot App"></img>
              <div class="card-body">
                <h5 class="card-title">Snapshot</h5>
                <p class="card-text">Snapshot is a recreation weather planning app, designed to make planning recreation activities in Utah, easy. Created by Christian Boswell, Sydney Goodwill, and Neal Gerber, this project uses an open weather API to determine if weather conditions are optimal for hiking, biking, or rock climbing. Our project won the award "Best UX/UI" for all Project 1 projects. Link to live site here: <a href="https://sydneygoodwill.github.io/Recreation-Weather-Planner/">Snapshot</a></p>
              </div>
            </div>
          </div>
          <div class="col-mb-4">
            <div class="card-main">
              <img src={workdayscheduler} class="card-img-top" alt="Day Planner App"></img>
              <div class="card-body">
                <h5 class="card-title">Day Planner</h5>
                <p class="card-text">Using Local Storage, this application takes user ideas and turns them into plans! Never forget your daily to-do's with Day Planner. Simply type in a task, click save, and your list is saved no matter how many times your refresh the browser! Link to live site here: <a href="https://sydneygoodwill.github.io/work-day-scheduler/">Day Planner</a></p>
              </div>
            </div>
          </div>
          <div class="col-mb-4">
            <div class="card-main">
              <img src={refactor} class="card-img-top" alt="Code Refactor App"></img>
              <div class="card-body">
                <h5 class="card-title">Code Refactor</h5>
                <p class="card-text">Refactoring code is an important aspect of development. It allows a fresh set of eyes to pick apart code and make an application more dynamic. That is exactly what I did for Horiseon - I refactored this code to better suit their site. Link to live site here: <a href="https://sydneygoodwill.github.io/code-refactor/">Code Refactor</a></p>
              </div>
            </div>
          </div>
          <div class="col-mb-4">
            <div class="card-main">
              <img src={amalganation} class="card-img-top" alt="AmalgaNation App"></img>
              <div class="card-body">
                <h5 class="card-title">AmalgaNation</h5>
                <p class="card-text">AmalgaNation is a social media app that combines a lot of different technologies that were previously new to our group. This fullstack application was a collaborative effort between Sydney Goodwill, Diana Shull, Neal Gerber, and Zach LaFleur. Create a profile, chat with friends, learn about new cultures or play some games - all on AmalgaNation! Link to live site here: <a href="https://fast-woodland-71053.herokuapp.com/login">AmalgaNation</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Portfolio;
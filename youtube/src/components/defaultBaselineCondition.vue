<template>
  <div class="app-container">
    <el-container class="inner-container">
      <el-header class="header-container">
        <div class="header1">
          <i class="el-icon-s-operation"></i>
          <img
            src="../../youtube.png"
            alt="YouTube"
            style="margin-left: 10px; width: 120px; height: 30px"
          />
        </div>
        <div class="header2">
          <div class="search-container">
            <el-input
              class="rounded-input"
              placeholder="Search"
              v-model="input1"
              :style="{ width: '550px' }"
            >
            </el-input>
            <el-button class="rounded-button" icon="el-icon-search"></el-button>
          </div>
          <i class="el-icon-microphone"></i>
        </div>
        <div class="header3">
          <i class="el-icon-video-camera"></i>
          <i class="el-icon-bell"></i>
          <el-avatar> user </el-avatar>
        </div>
      </el-header>

      <el-container class="content-container">
        <el-main class="main-content">
          <div>
            <iframe
              src="https://www.youtube.com/embed/g9-8GYvtygk"
              frameborder="0"
              allowfullscreen
              style="height: 542px; width: 100%"
            ></iframe>
          </div>
          <div class="bulletScreenComments">
            <div>442 people is watching, with 2048 bullet comments</div>
            <div>
              <button class="closeNotificationButton">
                <i class="el-icon-close-notification"></i>
              </button>
            </div>
            <div class="input-button-container">
              <el-input
                class="input-with-button"
                placeholder="Send a bullet comment to witness the moment"
                v-model="input3"
                :style="{ width: '495px' }"
              >
              </el-input>
              <button class="input-button">Send</button>
            </div>
          </div>
          <div>
            <strong style="font-size: larger; color: black"
              >FINAL FANTASY XVI – Ascension Trailer</strong
            >
          </div>
          <div class="youtuber">
            <div class="youtuber-info">
              <img
                src="../../youtuber.png"
                alt="YouTuber"
                style="width: 174px; height: 45px"
              />
              <el-button
                class="custom-button"
                type="info"
                round
                style="margin-left: 10px"
                >Subscribe</el-button
              >
            </div>

            <div class="youtuber-info">
              <div class="button-group">
                <button class="button left">
                  <i class="fas fa-thumbs-up"></i><strong>1.8M</strong>
                </button>
                <div class="divider"></div>
                <button class="button right">
                  <i class="fas fa-thumbs-down"></i><strong>10K</strong>
                </button>
              </div>
              <button class="button">
                <i class="el-icon-share"></i><strong>Share</strong>
              </button>
              <button class="button">
                <i class="el-icon-download"></i><strong>Download</strong>
              </button>
              <button class="button">
                <i class="el-icon-document-add"></i><strong>Save</strong>
              </button>
              <button class="button">
                <i class="el-icon-more"></i><strong></strong>
              </button>
            </div>
          </div>

          <div class="sort">
            <div style="margin-right: 20px">2,213 comments</div>
            <div class="sortord">
              <i class="el-icon-s-unfold" style="font-size: 26px"></i
              ><el-select v-model="value" placeholder="Sortord" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div style="margin-left: 45px">
              Percentage of people who leave comments:
            </div>
            <div>
              <el-progress
                :text-inside="true"
                :stroke-width="24"
                :percentage="66.67"
                status="success"
                class="short-progress-bar"
              ></el-progress>
            </div>
          </div>

          <div class="comments" style="display: flex; align-items: center">
            <el-avatar> user </el-avatar>
            <div style="margin: 0px 10px 0px 10px">
              <div style="font-size: 1px">Chen xinyuan</div>
              <div style="font-size: 1px">@user-by9yw5dx9y</div>
            </div>
            <div><i class="el-icon-edit" style="font-size: 26px"></i></div>
          </div>
          <div style="margin-top: 10px">
            <el-input
              type="text"
              placeholder="Add Comments"
              v-model="input2"
            ></el-input>
            <div
              style="margin-top: 10px; display: flex; justify-content: flex-end"
            >
              <button class="button" style="margin-right: 10px">
                <strong>Cancel</strong>
              </button>
              <button class="button"><strong>Comment</strong></button>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user2</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @thereareclouds
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 998
                    </div>
                  </div>
                </div>

                <div>Recent comments: 10</div>
                <div>Likes received: 1780</div>
                <div>Dislikes received: 90</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user2</el-avatar>
            </el-tooltip>

            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @thereareclouds
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                And here I was, about to give up on finding a Final Fantasy
                playlist to sleep to that didn't throw in epic battle music.
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">798</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">9</i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                38 replies
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user2</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @Bluedog7o7
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 9
                    </div>
                  </div>
                </div>

                <div>Recent comments: 20</div>
                <div>Likes received: 170</div>
                <div>Dislikes received: 6</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user3</el-avatar>
            </el-tooltip>

            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @Bluedog7o7
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  2 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Final Fantasy is a tale of a adventure as you experience
                happiness, sadness, regret, fear, and hope. The soundtrack
                perfectly represents the feelings the characters feel, we feel,
                and how that world feels. Thank you for putting this playlist of
                so many great songs on youtube so that we could listen to these
                master pieces while going through are daily lifes.
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">9</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">2</i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                2 replies
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user2</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @wslade35
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 8
                    </div>
                  </div>
                </div>

                <div>Recent comments: 4</div>
                <div>Likes received: 170</div>
                <div>Dislikes received: 2</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user4</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">@wslade35</div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 weeks ago
                </div>
              </div>
              <div style="font-size: 14px">
                Thank you for having representation from the entire series, in
                chronological order even. I wasn't enjoying most of the mixes
                out there as they mostly include music I didn't care for or
                never even experienced (I only ever played 1 lightly, 4 lots, 6,
                7 lots, and part of 8).
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">8</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">2</i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                10 replies
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user5</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @lchLiebeMichZiemlich
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 2
                    </div>
                  </div>
                </div>

                <div>Recent comments: 3</div>
                <div>Likes received: 80</div>
                <div>Dislikes received: 2</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user5</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @lchLiebeMichZiemlich
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Uematsu really started to show his musical genius from FFIII
                onwards. Some of the tracks in 4 and 6 are so damn good. Soken
                has giant shoes to fill!
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">8</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">10</i>
                <button>Reply</button>
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user5</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @RapperGerste
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 2039
                    </div>
                  </div>
                </div>

                <div>Recent comments: 33</div>
                <div>Likes received: 990</div>
                <div>Dislikes received: 70</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user6</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @RapperGerste
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Great list, although some of them such as Aerith's theme made me
                a bit sad lol But check out the FF14 OST too, so many good
                tracks, and tons that would be fit for this playlist :)
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">9</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px"></i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                1 reply
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user7</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @Bluedog7o7
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 0
                    </div>
                  </div>
                </div>

                <div>Recent comments: 3</div>
                <div>Likes received: 80</div>
                <div>Dislikes received: 2</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user7</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @Bluedog7o7
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  1 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Final Fantasy is a tale of a adventure as you experience
                happiness, sadness, regret, fear, and hope. The soundtrack
                perfectly represents the feelings the characters feel, we feel,
                and how that world feels. Thank you for putting this playlist of
                so many great songs on youtube so that we could listen to these
                master pieces while going through are daily lifes.
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">5</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px"></i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                3 replies
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user8</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @BrandonBlairMedia
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 1
                    </div>
                  </div>
                </div>

                <div>Recent comments: 5</div>
                <div>Likes received: 33</div>
                <div>Dislikes received: 0</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user8</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @BrandonBlairMedia
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Fantastic mix. Trying to get my Ultima V-esque RPG done by
                christmas and this is inspiring me as I code!
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">10</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">2</i>
                <button>Reply</button>
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user9</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @wslade35
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 29378
                    </div>
                  </div>
                </div>

                <div>Recent comments: 500</div>
                <div>Likes received: 33090</div>
                <div>Dislikes received: 928</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user9</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">@wslade35</div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                Thank you for having representation from the entire series, in
                chronological order even. I wasn't enjoying most of the mixes
                out there as they mostly include music I didn't care for or
                never even experienced (I only ever played 1 lightly, 4 lots, 6,
                7 lots, and part of 8).
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">5</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">1</i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                3 reply
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user10</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @hahahxixix
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 323
                    </div>
                  </div>
                </div>

                <div>Recent comments: 530</div>
                <div>Likes received: 298</div>
                <div>Dislikes received: 33</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user10</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">
                  @hahahxixix
                </div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  2 weeks ago
                </div>
              </div>
              <div style="font-size: 14px">
                Don't know why, but the tune at 1:00:27 always cuts me in half
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">54</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">10</i>
                <button>Reply</button>
              </div>
            </div>
          </div>
          <div class="userComments">
            <el-tooltip
              effect="dark"
              content="Top Left提示文字"
              placement="right"
            >
              <template #content>
                <div class="userTooltip">
                  <div><el-avatar>user11</el-avatar></div>
                  <div class="userCommentName">
                    <div style="font-size: 1px; margin: 0px 10px 0px 10px">
                      @bobib
                    </div>
                    <div style="font-size: 1px; color: rgb(111, 111, 111)">
                      Followers: 32873
                    </div>
                  </div>
                </div>

                <div>Recent comments: 7318</div>
                <div>Likes received: 283779</div>
                <div>Dislikes received: 328</div>
                <div style="margin-top: 10px">
                  <el-button size="mini">follow</el-button>
                  <el-button size="mini">send a message</el-button>
                </div>
              </template>
              <el-avatar>user11</el-avatar>
            </el-tooltip>
            <div style="padding: 0px 0px 0px 10px">
              <div class="userCommentName">
                <div style="font-size: 1px; margin-right: 10px">@bobib</div>
                <div style="font-size: 1px; color: rgb(111, 111, 111)">
                  3 Months ago
                </div>
              </div>
              <div style="font-size: 14px">
                13 trilogy music is severely underrated
              </div>
              <div style="font-size: 14px">
                <i class="fas fa-thumbs-up" style="margin-right: 10px">2874</i>
                <i class="fas fa-thumbs-down" style="margin-right: 10px">32</i>
                <button>Reply</button>
              </div>
              <div style="font-size: 14px; color: rgb(0, 136, 255)">
                <i class="el-icon-arrow-down"></i>
                124 reply
              </div>
            </div>
          </div>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="44"
            >
            </el-pagination>
          </div>
        </el-main>
        <el-aside class="aside" width="400px">
          <div>
            <el-button type="info" size="small" plain>ALL</el-button>
            <el-button type="info" size="small" plain>Final fantasy</el-button>
            <el-button type="info" size="small" plain>Games</el-button>
            <el-button type="info" size="small" plain>Relatives</el-button>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div>
            <img
              src="../../recommendation.png"
              alt="recommendation"
              style="margin-top: 20px; width: 380px; height: 611px"
            />
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      currentPage: 4,
      options: [
        {
          value: "选项1",
          label: "most liked",
        },
        {
          value: "选项2",
          label: "most disliked",
        },
        {
          value: "选项3",
          label: "newest",
        },
        {
          value: "选项4",
          label: "oldest",
        },
        {
          value: "选项5",
          label: "from friends",
        },
        {
          value: "选项6",
          label: "verified users",
        },
      ],
      value: "",
    };
  },
  methods: {},
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.inner-container {
  display: flex;
  flex-direction: column;
}

.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header1,
.header2,
.header3 {
  display: flex;
  align-items: center;
}

.header1 > *,
.header2 > *,
.header3 > * {
  margin: 0 10px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.main-content {
  display: flex;
  align-items: center;
}
.header-container {
  font-size: 26px;
}
.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 22px;
  overflow: hidden;
}

.rounded-input .el-input__inner,
.rounded-button {
  border: none;
}

.rounded-input .el-input__inner {
  border-right: none;
}
.aside {
  margin-top: 30px;
}
.youtuber {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.youtuber-info {
  display: flex;
  align-items: flex-start;
}
.custom-button {
  background-color: black !important;
  color: white !important;
  padding-left: 5px !important; /* Set as needed */
  padding-right: 5px !important; /* Set as needed */
  border: 2px solid black !important;
}

.button-group {
  display: flex;
  background-color: #e4e4e4; /* 任意的灰色背景 */
  border-radius: 25px; /* 任意的圆角大小 */
}

.divider {
  width: 3px; /* 增加宽度以使其更明显 */
  background-color: #000000; /* 更深的颜色 */
  align-self: center; /* 让线居中显示 */
}

.button {
  padding: 10px 10px; /* 根据需要调整 */
  background-color: #e9e9e9; /* 与 .button-group 的背景颜色一致 */
  color: black;
  border: none;
  border-radius: 25px; /* 添加圆角 */
  margin-left: 10px; /* 添加右外边距 */
}

.button.left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.button.right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-left: -1px; /* 重叠左边的边框以避免双边框的现象 */
}
.button:last-child {
  margin-right: 0;
}
.comments {
  margin-top: 10px;
}
.comment-button {
  padding: 10px 10px;
  background-color: #e9e9e9;
  color: black;
  border: none;
  border-radius: 25px;
  margin-left: 10px;
}
.sort {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
.sortord {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.short-progress-bar {
  width: 400px; /* 可以改为你想要的宽度 */
}
.bulletScreenComments {
  display: flex;
  align-items: center;
}
.closeNotificationButton {
  font-size: 15px;
  margin: 0px 10px 0px 10px;
}
.input-button-container {
  display: flex;
  align-items: stretch;
}

.input-with-button {
  flex-grow: 1; /* 允许 input 占据容器的大部分空间 */
  border: none; /* 移除 input 的 border */
}

.input-button {
  border: none;
  background-color: #ced4da;
  padding: 0 10px;
}
.userComments {
  display: flex;
  align-items: center;
  padding-top: 20px;
}
.userCommentName {
  display: flex;
  align-items: center;
}
.userComments {
  display: flex;
  flex-direction: row;
  align-items: flex-start; /*保证元素顶部对齐*/
}

.userComments > .el-avatar {
  flex-shrink: 0; /*保证avatar不会缩小*/
}

.userComments > div {
  flex-grow: 1; /*保证div可以扩大，占据剩余空间*/
  overflow: auto; /*如果文本过长，可以滚动显示*/
}
.userTooltip {
  display: flex;
  align-items: center;
}
.block {
  padding-top: 10px;
}
</style>
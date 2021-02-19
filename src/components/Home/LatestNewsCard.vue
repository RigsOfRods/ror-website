!<template>
  <div class="latest-news-card">
    <div class="card" style="background-color: #131313;">
      <div class="card-body">
        <div class="row">
          <div class="col avatar">
            <img
              :src="avatar_url"
              alt=""
            />
          </div>
          <div class="col latest-news-info">
            <h6>
              {{ title }}
            </h6>
            <span class="date">
              {{ date }}
            </span>
          </div>
        </div>
        <div class="latest-news-footer">
          <span class="author">
            By <a :href="author_link">{{ author }}</a>
          </span>
          <a :href="post_link" class="float-end">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "author", "author_link", "post_link", "avatar_url"],
};
</script>

<style lang="scss" scoped>
@import "../../stylesheets/_vars.scss";

.latest-news-card {
  padding-bottom: 20px;
  img {
    width: 63px;
    border-radius: 0.5rem;
  }
  .avatar {
    flex: 0 0 63px;
    -ms-flex: 0 0 63px;
  }
  .latest-news-info {
    color: white;
    padding: 7px 0;
    h6 {
      font-size: 1.05rem;
    }
    .date {
      color: $gray-500;
    }
  }

  .latest-news-footer {
    padding-top: 5px;
    color: $gray-500;
    font-size: 1rem;
  }
}
</style>

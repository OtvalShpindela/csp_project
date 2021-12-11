<template>
  <main class="main">
    <div class="container">
      <div class="news_block"></div>
      <div class="b_blocks">
        <div class="vk_block"></div>
        <div class="short_inf_block">
          <p class="your_grades">Ваши оценки за неделю:</p>
          <div class="grades"></div>
          <div class="short_timetable"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.main {
  width: 100%;
  padding-top: 37px;
  padding-bottom: 37px;
  flex: 1 1 auto;
}

.news_block {
  width: 100%;
  height: 414px;
  background-color: white;
  margin-bottom: 15px;
}

.vk_block {
  background-color: white;
  width: 268px;
  height: 387px;
  float: left;
}

.short_inf_block {
  padding: 5px;
  float: right;
  width: 917px;
  height: 387px;
  background-color: white;
}

.your_grades {
  margin: 0;
}

.short_timetable {
  float: right;
}

.grades {
  float: left;
  height: 319px;
  width: 380px;
}
</style>

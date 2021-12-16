<template>
  <nav class="navigation">
    <div class="container">
      <a href="timetable.php" class="nav_text"
        ><div class="nav"><p class="timetable">Расписание</p></div></a
      >
      <a href="journal.php" class="nav_text"
        ><div class="nav"><p class="journal">Успеваемость</p></div></a
      >
      <a href="literature.php" class="nav_text"
        ><div class="nav"><p class="literature">Литература</p></div></a
      >
      <a href="teachers.php" class="nav_text"
        ><div class="nav"><p class="teachers">Учителя</p></div></a
      >
    </div>
  </nav>
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
.navigation {
  width: 100%;
  height: 55px;
  background-color: white;
}
.nav {
  width: 300px;
  height: 55px;
  float: left;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.nav:hover {
  background: black;
  color: white;
  transition: 0.5s;
}

.nav_text {
  margin: 0;
  font-size: 24px;
}

.nav_vis {
  width: 300px;
  height: 55px;
  float: left;
  background: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>

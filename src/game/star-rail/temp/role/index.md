<script setup>
import { ref } from "vue";
import { RandomChildPkg } from "@components";
import idList from "@data/starRail/role/idList.json"
</script>

<RandomChildPkg :idList="idList"></RandomChildPkg>
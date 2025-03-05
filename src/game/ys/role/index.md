<script setup>
import { ref } from "vue";
import { RandomChildPkg } from "@components";
import idList from "@data/ys/role/idList.json"
</script>

<RandomChildPkg :idList="idList"></RandomChildPkg>
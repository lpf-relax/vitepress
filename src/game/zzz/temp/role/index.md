<script setup>
import { ref } from "vue";
import { RandomChildPkg } from "@components";
import idList from "@data/zzz/role/idList.json"
</script>

<RandomChildPkg :idList="idList"></RandomChildPkg>
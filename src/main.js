import { OBR } from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  OBR.contextMenu.create({
    id: "com.example.refimage",
    icons: [{ icon: "🖼️", label: "Show Reference" }],
    filter: async (context) => {
      // Only show for items with refimage metadata
      const items = await OBR.scene.items.getItems(context.items);
      return items.some(item => item.metadata["refimage.url"]);
    },
    onClick: async (context) => {
      const items = await OBR.scene.items.getItems(context.items);
      const token = items.find(item => item.metadata["refimage.url"]);
      if (token) {
        const imageUrl = token.metadata["refimage.url"];
        OBR.popover.open({
          id: "refimage-viewer",
          url: `/public/viewer.html?img=${encodeURIComponent(imageUrl)}`,
          width: 600,
          height: 400
        });
      }
    }
  });
});

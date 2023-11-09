"use client";
import { Crumb } from "@/components/crumb/crumb";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { usePathname } from "next/navigation";
import { Title } from "@/components/title/title";
import { Description } from "@/components/description/description";
import { Box } from "@/components/box/box";
import { Crumbs } from "@/components/crumbs/crumbs";
import { Text } from "@/components/text/text";
export function CoursePage() {
  const textCourse = usePathname().split("/").reverse()[0];
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <Crumbs>
          <Crumb activeLink={false} linkText="/education" text="Курсы" />
          <Crumb
            activeLink={true}
            linkText="/education/course/123"
            text={textCourse}
          />
        </Crumbs>

        <Box>
          <Title text={textCourse} />
          <Description text="Описание курса" />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet. Risus in hendrerit gravida rutrum. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Dignissim suspendisse in est ante in nibh. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Id eu nisl nunc mi ipsum faucibus vitae. Vitae congue mauris rhoncus aenean vel. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Sed viverra tellus in hac. Augue lacus viverra vitae congue eu consequat ac felis donec. Elementum eu facilisis sed odio morbi quis commodo. Nunc sed blandit libero volutpat. Odio tempor orci dapibus ultrices in iaculis nunc sed.

Id interdum velit laoreet id donec ultrices tincidunt arcu non. Sit amet risus nullam eget felis eget. Vitae justo eget magna fermentum iaculis eu non diam. Quis lectus nulla at volutpat diam ut venenatis tellus. Vitae proin sagittis nisl rhoncus mattis rhoncus. Suspendisse faucibus interdum posuere lorem. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Magnis dis parturient montes nascetur ridiculus mus. Sit amet mauris commodo quis. Tempus iaculis urna id volutpat lacus laoreet non. Cras adipiscing enim eu turpis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Consequat semper viverra nam libero. Et egestas quis ipsum suspendisse ultrices gravida dictum. Placerat orci nulla pellentesque dignissim enim sit amet venenatis.

Arcu dui vivamus arcu felis bibendum ut tristique. Sapien pellentesque habitant morbi tristique senectus et netus et. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Velit sed ullamcorper morbi tincidunt ornare massa. Egestas dui id ornare arcu odio ut sem. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Vitae congue mauris rhoncus aenean vel elit scelerisque. Magna eget est lorem ipsum dolor sit amet. Posuere ac ut consequat semper viverra. Erat pellentesque adipiscing commodo elit at. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Iaculis urna id volutpat lacus. Bibendum arcu vitae elementum curabitur vitae.

Egestas fringilla phasellus faucibus scelerisque. Integer vitae justo eget magna fermentum iaculis eu non diam. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Cursus euismod quis viverra nibh cras pulvinar mattis. Nisl nunc mi ipsum faucibus vitae aliquet. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Lectus arcu bibendum at varius vel pharetra vel turpis. Sed vulputate odio ut enim. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.

Nulla malesuada pellentesque elit eget gravida. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Luctus accumsan tortor posuere ac ut consequat semper. A scelerisque purus semper eget duis at tellus at. Et netus et malesuada fames ac turpis. Auctor eu augue ut lectus arcu bibendum at varius. Purus non enim praesent elementum facilisis leo vel fringilla. Pharetra vel turpis nunc eget lorem dolor sed. Amet volutpat consequat mauris nunc congue. Blandit massa enim nec dui nunc. Nec ultrices dui sapien eget mi proin sed libero enim."
          />
        </Box>
      </Wrapper>
    </PageWrapper>
  );
}

export default CoursePage;

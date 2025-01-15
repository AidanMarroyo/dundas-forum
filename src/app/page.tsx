import { AppSidebar } from '@/components/app-sidebar';
import PostEditor from '@/components/posts/editor/PostEditor';
import TrendSidebar from '@/components/TrendSidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className='flex w-full min-w-0 gap-10 justify-between'>
          <div className='ml-40'></div>
          <div className=' w-1/2 min-w-0 space-y-5'>
            <PostEditor />
            <Tabs defaultValue='community'>
              <TabsList>
                <TabsTrigger value='news'>News</TabsTrigger>
                <TabsTrigger value='community'>Community</TabsTrigger>
              </TabsList>
              <TabsContent value='news'>News</TabsContent>
              <TabsContent value='community'>Community</TabsContent>
            </Tabs>
          </div>
          <TrendSidebar />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

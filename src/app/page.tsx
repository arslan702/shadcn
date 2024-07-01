"use client"
import Image from "next/image";
import Heading from "../components/Heading"
import { AccordionDemo } from "../components/Accordion"
import { AlertDemo, AlertDestructive } from "../components/Alert"
import { ButtonDemo, ButtonSecondary, ButtonDestructive, ButtonOutline, ButtonGhost, ButtonLink, ButtonIcon, ButtonWithIcon, ButtonLoading, ButtonAsChild } from '../components/Button/index';
import { AlertDialogDemo } from '../components/AlertDialog/index';
import { AspectRatioDemo } from '../components/AspectRatio/index';
import { AvatarDemo } from '../components/Avatar/index';
import { BadgeDemo, BadgeSecondary, BadgeOutline, BadgeDestructive } from '../components/Badge/index';
import { BreadcrumbDemo, BreadcrumbWithCustomSeparator, BreadcrumbWithDropdown, BreadcrumbCollapsed, BreadcrumbWithCustomSeparatorLink } from '../components/Breadcrumb/index';
import { CalendarDemo } from '../components/Calendar/index';
import { CalendarForm } from '../components/Calendar/DateSelect';
import { CardWithForm } from '../components/Card/index';
import { CardDemo } from '../components/Card/NotificationCard';
import { CarouselDemo, CarouselSize, CarouselSpacing, CarouselOrientation } from '../components/Carousel/index';
import { CheckboxWithText, CheckboxDisabled, CheckboxReactHookFormMultiple } from '../components/Checkbox/index';
import { CollapsibleDemo } from '../components/Collapsible/index';
import { CommandDemo, CommandDialogDemo } from '../components/Command/index';
import { ComboboxDemo } from '../components/Combobox/index';
import { ComboboxPopover } from '../components/Combobox/Popover';
import { ComboboxDropdownMenu } from '../components/Combobox/DropDown';
import { ComboBoxResponsive } from '../components/Combobox/Responsive';
import { ComboboxForm } from '../components/Combobox/Form';
import { ContextMenuDemo } from '../components/ContextMenu/index';
import { DatePickerDemo } from '../components/DatePicker/index';
import { DatePickerWithRange } from '../components/DatePicker/DateRangePicker';
import { DatePickerWithPresets } from '../components/DatePicker/WithPresets';
import { DatePickerForm } from '../components/DatePicker/Form';
import { DialogDemo } from '../components/Dialog/index';
import { DrawerDemo } from '../components/Drawer/index';
import { DropdownMenuRadioGroupDemo, DropdownMenuCheckboxes } from '../components/DropdownMenu/index';
import { ProfileForm } from '../components/Form/index';
import { HoverCardDemo } from '../components/HoverCard/index';
import { InputDemo, InputFile, InputDisabled, InputWithLabel, InputWithButton, InputForm } from '../components/Input/index';
import { InputOTPDemo } from '../components/InputOtp/index';
import { InputOTPPattern } from '../components/InputOtp/Pattern';
import { InputOTPWithSeparator } from '../components/InputOtp/Separator';
import { InputOTPControlled } from '../components/InputOtp/Controlled';
import { InputOTPForm } from '../components/InputOtp/Form';
import { LabelDemo } from '../components/Label/index';
import { MenubarDemo } from '../components/Menubar/index';
import { NavigationMenuDemo } from '../components/NavigationMenu/index';
import { PaginationDemo } from '../components/Pagination/index';
import { PopoverDemo } from '../components/Popover/index';
import { ProgressDemo } from '../components/Progress/index';
import { RadioGroupDemo } from '../components/RadioGroup/index';
import { RadioGroupForm } from '../components/RadioGroup/Form';
import { ResizableDemo } from '../components/Resizable/index';
import { ResizableVerticle } from '../components/Resizable/Verticle';
import { ResizableHandler } from '../components/Resizable/Handle';
import { ScrollAreaDemo, ScrollAreaHorizontalDemo } from '../components/ScrollArea/index';
import { SelectDemo } from '../components/Select/index';
import { SelectScrollable } from '../components/Select/Scrollable';
import { SelectForm } from '../components/Select/SelectForm';
import { SeparatorDemo } from '../components/Separator/index';
import { SheetDemo } from '../components/Sheet/index';
import { SkeletonDemo, SkeletonCard } from '../components/Skeleton/index';
import { SliderDemo } from '../components/Slider/index';
import { SwitchDemo, SwitchForm } from '../components/Switch/index';
import { TableDemo } from '../components/Table/index';
import { TabsDemo } from '../components/Tabs/index';
import { TextareaDemo, TextareaDisabled, TextareaWithLabel, TextareaWithText, TextareaWithButton, TextareaForm } from '../components/TextArea/index';
import { ToastDemo, ToastSimple, ToastWithTitle, ToastWithAction, ToastDestructive } from '../components/Toast/index';
import { ToggleDemo, ToggleOutline, ToggleWithText, ToggleSm, ToggleLg, ToggleDisabled } from '../components/Toggle/index';
import { ToggleGroupDemo, ToggleGroupOutline, ToggleGroupSingle, ToggleGroupSmall, ToggleGroupLarge, ToggleGroupDisabled } from '../components/ToggleGroup/index';
import { TooltipDemo } from '../components/Tooltip/index';
import { SonnerDemo } from '../components/Sonner/index';

export default function Home() {
  return (
    <div className="flex h-full">
    <div className="flex-1 flex flex-col justify-center items-center pt-20">
      <div className="w-[60%] flex flex-col justify-center items-center">
        <Heading text="Accordion"/>
        <AccordionDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Alert"/>
        <AlertDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Alert Destructive"/>
        <AlertDestructive/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Alert Dialog"/>
        <AlertDialogDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Aspect Ratio"/>
        <AspectRatioDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-24">
        <Heading text="Avatar"/>
        <AvatarDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <h3 className="text-[27px] font-[600] mb-5">Badge</h3>
        <Heading text="Default"/>
        <BadgeDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Secondary"/>
        <BadgeSecondary/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Outline"/>
        <BadgeOutline/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Destructive"/>
        <BadgeDestructive/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <h3 className="text-[27px] font-[600] mb-5">Breadcrumb</h3>
        <Heading text="Breadcrumb"/>
        <BreadcrumbDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Custom Separator"/>
        <BreadcrumbWithCustomSeparator/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Dropdown"/>
        <BreadcrumbWithDropdown/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Collapsed"/>
        <BreadcrumbCollapsed/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Link Component"/>
        <BreadcrumbWithCustomSeparatorLink/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <h3 className="text-[27px] font-[600] mb-5">Button</h3>
        <Heading text="Primary"/>
        <ButtonDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Secondary"/>
        <ButtonSecondary/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Destructive"/>
        <ButtonDestructive/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Outline"/>
        <ButtonOutline/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Ghost"/>
        <ButtonGhost/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Link"/>
        <ButtonLink/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Icon"/>
        <ButtonIcon/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="With Icon"/>
        <ButtonWithIcon/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Loading"/>
        <ButtonLoading/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="As Child"/>
        <ButtonAsChild/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Calendar"/>
        <CalendarDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Calendar Form"/>
        <CalendarForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Card"/>
        <CardWithForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Notification Card"/>
        <CardDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <h3 className="text-[27px] font-[600] mb-5">Carousel</h3>
        <Heading text="Carousel"/>
        <CarouselDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Sizes"/>
        <CarouselSize/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Spacing"/>
        <CarouselSpacing/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Orientation"/>
        <CarouselOrientation/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-`0">
        <h3 className="text-[27px] font-[600] mb-5">Checkbox</h3>
        <Heading text="With Text"/>
        <CheckboxWithText/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Disabled"/>
        <CheckboxDisabled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Form"/>
        <CheckboxReactHookFormMultiple/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Collapsible"/>
        <CollapsibleDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Command"/>
        <CommandDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Command Dialog"/>
        <CommandDialogDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Combobox</h3>
        <Heading text="Combobox"/>
        <ComboboxDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Popover"/>
        <ComboboxPopover/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Dropdown Menu"/>
        <ComboboxDropdownMenu/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Responsive"/>
        <ComboBoxResponsive/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Form"/>
        <ComboboxForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Context Menu"/>
        <ContextMenuDemo/>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <Heading text="DataTable"/>
        <TableDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Date Picker</h3>
        <Heading text="Simple"/>
        <DatePickerDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Date Range Picker"/>
        <DatePickerWithRange/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="With Presets"/>
        <DatePickerWithPresets/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Date Picker Form"/>
        <DatePickerForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Dialog"/>
        <DialogDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Drawer"/>
        <DrawerDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Dropdown Menu</h3>
        <Heading text="Dropdown Menu Checkboxex"/>
        <DropdownMenuCheckboxes/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Dropdown Menu RadioGroup"/>
        <DropdownMenuRadioGroupDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Form"/>
        <ProfileForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Hover Card"/>
        <HoverCardDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Input</h3>
        <Heading text="Default"/>
        <InputDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="File"/>
        <InputFile/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Disabled"/>
        <InputDisabled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="With Label"/>
        <InputWithLabel/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="With Button"/>
        <InputWithButton/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Input Form"/>
        <InputForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Input-OTP</h3>
        <Heading text="Otp"/>
        <InputOTPDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Pattern"/>
        <InputOTPPattern/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Separator"/>
        <InputOTPWithSeparator/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Controlled"/>
        <InputOTPControlled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="InputOTP Form"/>
        <InputOTPForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Label"/>
        <LabelDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Menubar"/>
        <MenubarDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Navigation Menu"/>
        <NavigationMenuDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Pagination"/>
        <PaginationDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Popover"/>
        <PopoverDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Progress"/>
        <ProgressDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Radio Group</h3>
        <Heading text="Radio Group"/>
        <RadioGroupDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Radio-Group Form"/>
        <RadioGroupForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Resizable</h3>
        <Heading text="Resizable"/>
        <ResizableDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Resizable Verticle"/>
        <ResizableVerticle/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Resizable Handle"/>
        <ResizableHandler/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">ScrollArea</h3>
        <Heading text="ScrollArea Vertical"/>
        <ScrollAreaDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="ScrollArea Horizontal"/>
        <ScrollAreaHorizontalDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Select</h3>
        <Heading text="Select"/>
        <SelectDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Select Scrollable"/>
        <SelectScrollable/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Select Form"/>
        <SelectForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Separator"/>
        <SeparatorDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Sheet</h3>
        <Heading text="Sheet"/>
        <SheetDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Skeleton</h3>
        <Heading text="Skeleton"/>
        <SkeletonDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Skeleton Card"/>
        <SkeletonCard/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Slider</h3>
        <Heading text="Slider"/>
        <SliderDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Switch</h3>
        <Heading text="Switch"/>
        <SwitchDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Switch Form"/>
        <SwitchForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Sonner"/>
        <SonnerDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Table"/>
        <TableDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Tabs"/>
        <TabsDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Switch</h3>
        <Heading text="Switch"/>
        <SwitchDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Textarea</h3>
        <Heading text="Textarea Default"/>
        <TextareaDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Textarea Disabled"/>
        <TextareaDisabled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Textarea With Label"/>
        <TextareaWithLabel/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Textarea With Text"/>
        <TextareaWithText/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Textarea With Button"/>
        <TextareaWithButton/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Textarea Form"/>
        <TextareaForm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Toast</h3>
        <Heading text="Toast Demo"/>
        <ToastDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toast Simple"/>
        <ToastSimple/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toast With Title"/>
        <ToastWithTitle/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toast With Action"/>
        <ToastWithAction/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toast Destructive"/>
        <ToastDestructive/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Toggle</h3>
        <Heading text="Toggle Demo"/>
        <ToggleDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle Outline"/>
        <ToggleOutline/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle With Text"/>
        <ToggleWithText/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle Small"/>
        <ToggleSm/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle Large"/>
        <ToggleLg/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle Disabled"/>
        <ToggleDisabled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <h3 className="text-[27px] font-[600] mb-5">Toggle Group</h3>
        <Heading text="Toggle-group Demo"/>
        <ToggleGroupDemo/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle-group Outline"/>
        <ToggleGroupOutline/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle-group Single"/>
        <ToggleGroupSingle/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle-group Small"/>
        <ToggleGroupSmall/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle-group Large"/>
        <ToggleGroupLarge/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-10">
        <Heading text="Toggle-group Disabled"/>
        <ToggleGroupDisabled/>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center mt-20">
        <Heading text="Tooltip"/>
        <TooltipDemo/>
      </div>
    </div>
    </div>
  );
}

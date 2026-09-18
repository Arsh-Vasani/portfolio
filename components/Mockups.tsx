import type { ReactNode } from "react";

const chrome = (
  <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="ml-3 hidden flex-1 truncate rounded-full bg-ink/5 px-3 py-1 text-3xs text-ink/55 sm:block">
      app.arsh.dev/admin
    </span>
  </div>
);

const bars = [34, 48, 42, 60, 52, 72, 64, 84, 70, 92, 78, 100];

export function DashboardMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {chrome}
      <div className="flex">
        <div className="hidden w-9.5 flex-col items-center gap-3 border-r border-ink/10 bg-fog px-2 py-4 sm:flex">
          <span className="h-3.5 w-3.5 rounded-md bg-cardinal" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-ink/15"
              style={{ opacity: i === 0 ? 1 : 0.5 }}
            />
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-3xs uppercase tracking-hi text-ink/55">
                Overview
              </p>
              <p className="mt-0.5 text-xs font-semibold">Sales report</p>
            </div>
            <p className="text-4xs text-leaf">● Live</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["Revenue", "₹84.2k", "+12.4%"],
              ["Orders", "1,284", "+8.1%"],
              ["Returns", "3.1%", "-0.6%"],
            ].map(([label, value, delta], i) => (
              <div
                key={label}
                className="rounded-xl border border-ink/10 bg-white p-2 shadow-sm"
                style={{ opacity: 0.95 - i * 0.12 }}
              >
                <p className="text-4xs text-ink/55">{label}</p>
                <p className="mt-1 text-11 font-semibold">{value}</p>
                <p className="mt-0.5 text-4xs font-medium text-leaf">{delta}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-18.5 items-end gap-1.25 rounded-xl border border-ink/10 bg-fog p-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="mock-bar flex-1 rounded-t-sm bg-cardinal/80"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 45}ms`,
                  opacity: 0.55 + (i / bars.length) * 0.45,
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            {[
              ["Cleanser · 250ml", "₹899", "Shipped"],
              ["Serum · 30ml", "₹1,299", "Pending"],
              ["Moisturizer · 50ml", "₹749", "Shipped"],
            ].map(([name, price, status]) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-2.5 py-1.5"
              >
                <span className="h-4 w-4 rounded-md bg-ink/10" />
                <span className="flex-1 truncate text-3xs text-ink/70">
                  {name}
                </span>
                <span className="text-3xs font-semibold text-ink/70">
                  {price}
                </span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-7 font-semibold ${
                    status === "Shipped"
                      ? "bg-leaf/15 text-ink/60"
                      : "bg-amber-200/70 text-ink/60"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebTemplateMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {chrome}
      <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-cardinal" />
          <span className="h-2 w-8 rounded bg-ink/20" />
        </div>
        <div className="hidden gap-3 sm:flex">
          {[30, 46, 38].map((w, i) => (
            <span key={i} className="h-1.5 rounded bg-ink/15" style={{ width: w }} />
          ))}
        </div>
        <span className="rounded-full bg-ink px-3 py-1 text-4xs font-semibold text-white">
          Get started
        </span>
      </div>
      <div className="p-4">
        <span className="h-2.5 w-12 rounded bg-cardinal/25" />
        <div className="mt-2.5 flex flex-col gap-1.5">
          <span className="block h-3.5 w-11/12 rounded bg-ink/85" />
          <span className="block h-3.5 w-2/3 rounded bg-ink/85" />
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <span className="block h-1.5 w-2/3 rounded bg-ink/15" />
          <span className="block h-1.5 w-1/2 rounded bg-ink/15" />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-cardinal px-3.5 py-1.5 text-4xs font-semibold text-white">
            Shop the range
          </span>
          <span className="rounded-full border border-ink/20 px-3.5 py-1.5 text-4xs font-medium text-ink/60">
            Learn more
          </span>
        </div>
        <div className="mt-3.5 grid grid-cols-3 gap-2">
          <span className="h-1.5 rounded bg-ink/10" />
          <span className="h-1.5 rounded bg-ink/10" />
          <span className="h-1.5 rounded bg-ink/10" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 bg-fog px-4 py-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 rounded-xl border border-ink/10 bg-white p-2.5"
          >
            <span className="block h-8 rounded-md bg-cardinal/10" />
            <span className="block h-1.5 w-3/4 rounded bg-ink/15" />
            <span className="block h-1.5 w-1/2 rounded bg-ink/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LibraryMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {chrome}
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-3xs uppercase tracking-hi text-ink/55">
              Design system
            </p>
            <p className="mt-0.5 text-xs font-semibold">Reusable kit</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-cardinal px-2 py-1 text-4xs font-semibold text-white">
              Primary
            </span>
            <span className="rounded-md border border-ink/15 px-2 py-1 text-4xs font-medium text-ink/60">
              Ghost
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 flex items-center gap-2 rounded-xl border border-ink/10 bg-fog px-3 py-2">
            <span className="h-3 w-3 rounded-full bg-ink/15" />
            <span className="h-1.5 flex-1 rounded-full bg-ink/10" />
            <span className="h-4 w-7 rounded-full bg-cardinal p-0.5">
              <span className="block h-3 w-3 rounded-full bg-white" />
            </span>
          </div>
          {[
            ["h-8 w-8 rounded-lg bg-cardinal/15", "h-1.5 w-16 rounded bg-ink/20"],
            ["h-8 w-8 rounded-full bg-ink/10", "h-1.5 w-14 rounded bg-ink/20"],
          ].map(([a, b], i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-2.5 py-2"
            >
              <span className={`${a} flex items-center justify-center`}>
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className={b} />
            </div>
          ))}
          <div className="rounded-xl border border-ink/10 bg-white p-2.5">
            <p className="mb-1.5 text-4xs uppercase tracking-widest text-ink/55">
              Progress
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
              <div className="h-full w-3/4 rounded-full bg-cardinal" />
            </div>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-2.5">
            <p className="mb-1.5 text-4xs uppercase tracking-widest text-ink/55">
              Chips
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="rounded-full bg-cardinal/15 px-1.5 py-0.5 text-7 text-ink/70">
                React
              </span>
              <span className="rounded-full bg-ink/10 px-1.5 py-0.5 text-7 text-ink/70">
                Next.js
              </span>
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 rounded-xl border border-ink/10 bg-fog px-3 py-2">
            <span className="h-3 w-5 rounded-sm border-2 border-cardinal text-center text-4xs leading-none text-cardinal">
              ✓
            </span>
            <span className="h-1.5 w-24 rounded bg-ink/15" />
            <span className="ml-auto rounded-full border border-leaf px-1.5 py-0.5 text-7 font-semibold text-ink/60">
              Accessible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const storeChrome = (
  <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="ml-3 hidden flex-1 truncate rounded-full bg-ink/5 px-3 py-1 text-3xs text-ink/55 sm:block">
      getnextjstemplates.com
    </span>
  </div>
);

const templates = [
  { price: "Free", badge: "bg-leaf/20 text-ink/60" },
  { price: "$24", badge: "bg-cardinal/10 text-cardinal" },
  { price: "$39", badge: "bg-cardinal/10 text-cardinal" },
];

export function TemplatesMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {storeChrome}
      <div className="flex items-center justify-between gap-2 border-b border-ink/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-cardinal" />
          <span className="h-2 w-11 rounded bg-ink/80" />
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {[26, 38, 30].map((w, i) => (
            <span key={i} className="h-1.5 rounded bg-ink/15" style={{ width: w }} />
          ))}
        </div>
        <span className="rounded-full bg-ink px-2.5 py-1 text-4xs font-semibold text-white">
          All Access
        </span>
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full border border-leaf/40 bg-leaf/10 px-2 py-0.5 text-7 font-semibold uppercase tracking-hi text-ink/60">
          Trusted by 10k+ devs
        </span>
        <div className="mt-2 flex flex-col gap-1">
          <span className="block h-3 w-full rounded bg-ink/90" />
          <span className="block h-3 w-11/12 rounded bg-ink/90" />
          <span className="mt-1 block h-1.5 w-2/3 rounded bg-ink/15" />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-cardinal px-3 py-1.5 text-4xs font-semibold text-white">
            Browse templates
          </span>
          <span className="rounded-full border border-ink/15 px-3 py-1.5 text-4xs font-medium text-ink/60">
            Free templates
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 bg-fog px-4 py-3">
        {templates.map((t, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm"
          >
            <div className="relative h-9 bg-ink/5">
              <span className="absolute left-1 top-1 block h-4 w-1/2 rounded bg-ink/10" />
              <span className="absolute right-1 top-1 h-5 w-3.5 rounded bg-cardinal/15" />
              <span className="absolute bottom-1 left-1 right-1 block h-1 rounded bg-ink/10" />
            </div>
            <div className="p-1.5">
              <span className="flex h-1.5 w-5/6 rounded bg-ink/20" />
              <span className="mt-1 block h-1 w-2/3 rounded bg-ink/10" />
              <span className={`mt-1.5 inline-block rounded-full px-1.5 py-0.5 text-7 font-semibold ${t.badge}`}>
                {t.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink/10 px-4 py-2">
        <span className="text-4xs uppercase tracking-hi text-ink/50">
          37+ templates
        </span>
        <span className="text-4xs font-medium text-ink/60">
          Free &amp; premium
        </span>
      </div>
    </div>
  );
}

const adminChrome = (
  <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="ml-3 hidden flex-1 truncate rounded-full bg-ink/5 px-3 py-1 text-3xs text-ink/55 sm:block">
      tailwind-admin.com
    </span>
  </div>
);

export function AdminTemplateMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {adminChrome}
      <div className="flex items-center justify-between gap-2 border-b border-ink/10 bg-charcoal px-4 py-2.5 text-mist">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-cardinal" />
          <span className="h-2 w-11 rounded bg-mist/60" />
        </div>
        <div className="hidden gap-1.5 sm:flex">
          {["React", "Next.js", "Vue"].map((f, i) => (
            <span
              key={f}
              className={`rounded-full px-2 py-0.5 text-7 font-semibold ${
                i === 0 ? "bg-cardinal text-white" : "bg-mist/10 text-mist/70"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        <span className="rounded-full bg-mist px-2.5 py-1 text-4xs font-semibold text-charcoal">
          Free Download
        </span>
      </div>
      <div className="flex">
        <div className="hidden w-9 flex-col items-center gap-2.5 border-r border-ink/10 bg-fog px-1.5 py-3 sm:flex">
          <span className="h-3.5 w-3.5 rounded-md bg-cardinal" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-ink/15"
              style={{ opacity: i === 0 ? 1 : 0.45 }}
            />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xs uppercase tracking-hi text-ink/55">Dashboard</p>
              <p className="mt-0.5 text-11 font-semibold">Tailwindadmin</p>
            </div>
            <span className="rounded-full bg-ink px-2 py-0.5 text-4xs font-semibold text-white">
              Sign up
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {[
              ["Sales", "$12.5k"],
              ["Orders", "1.2k"],
              ["Users", "8.4k"],
              ["Views", "92%"],
            ].map(([label, value], i) => (
              <div
                key={label}
                className="rounded-lg border border-ink/10 bg-white p-1.5"
                style={{ opacity: 0.95 - i * 0.1 }}
              >
                <p className="text-4xs text-ink/55">{label}</p>
                <p className="mt-0.5 text-11 font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex h-14 items-end gap-1 rounded-lg border border-ink/10 bg-fog p-1.5">
            {bars.map((h, i) => (
              <span
                key={i}
                className="mock-bar flex-1 rounded-sm bg-ink/70"
                style={{ height: `${h}%`, animationDelay: `${i * 45}ms` }}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-1">
            {[
              ["Dashboard layouts", "React"],
              ["UI components", "Shadcn"],
              ["Auth pages", "Next.js"],
            ].map(([label, tag]) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-2 py-1"
              >
                <span className="h-3.5 w-3.5 rounded-md bg-cardinal/15" />
                <span className="flex-1 truncate text-3xs text-ink/70">{label}</span>
                <span className="text-4xs font-semibold text-cardinal">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const spaceChrome = (
  <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="h-2 w-2 rounded-full bg-ink/20" />
    <span className="ml-3 hidden flex-1 truncate rounded-full bg-ink/5 px-3 py-1 text-3xs text-ink/55 sm:block">
      shadcnspace.com
    </span>
  </div>
);

const uiBlocks = [
  { title: "Hero Section", bars: [30, 45, 38, 60, 52], active: true },
  { title: "Pricing", bars: [60, 72, 55, 80, 68], active: false },
  { title: "Testimonials", bars: [42, 50, 64, 48, 70], active: false },
  { title: "Charts", bars: [80, 60, 90, 70, 100], active: false },
  { title: "Widgets", bars: [50, 40, 55, 45, 60], active: false },
  { title: "Sidebars", bars: [70, 52, 66, 58, 74], active: false },
];

export function ShadcnSpaceMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/10 bg-white text-ink shadow-mock">
      {spaceChrome}
      <div className="flex items-center justify-between gap-2 border-b border-ink/10 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-cardinal" />
          <span className="h-2 w-12 rounded bg-ink/80" />
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {["Blocks", "Templates", "UI"].map((label, i) => (
            <span
              key={label}
              className={`text-4xs font-medium ${i === 0 ? "text-ink" : "text-ink/55"}`}
            >
              {label}
            </span>
          ))}
        </div>
        <span className="rounded-full bg-ink px-2.5 py-1 text-4xs font-semibold text-white">
          Sign in
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-fog px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-ink/25" />
          <span className="text-4xs text-ink/50">
            Search blocks, components &amp; templates…
          </span>
        </div>
        <div className="mt-2.5 flex flex-col gap-1">
          <span className="block h-3 w-11/12 rounded bg-ink/90" />
          <span className="block h-3 w-3/4 rounded bg-ink/90" />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full border border-cardinal/30 bg-cardinal/10 px-2 py-0.5 text-4xs font-semibold text-cardinal">
            438+ Blocks
          </span>
          <span className="rounded-full border border-cardinal/30 bg-cardinal/10 px-2 py-0.5 text-4xs font-semibold text-cardinal">
            427+ Components
          </span>
          <span className="rounded-full bg-cardinal px-2.5 py-0.5 text-4xs font-semibold text-white">
            Browse
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-ink/10 bg-fog px-4 py-3">
        {uiBlocks.map((block, i) => (
          <div
            key={block.title}
            className="overflow-hidden rounded-xl border border-ink/10 bg-white"
            style={{ opacity: block.active ? 1 : 0.72 + (i % 3) * 0.08 }}
          >
            <div className="relative h-8 bg-white p-1.5">
              <div className="flex h-full w-full items-end gap-1 rounded-md border border-ink/10 bg-fog p-1">
                {block.bars.map((h, j) => (
                  <span
                    key={j}
                    className="flex-1 rounded-sm bg-cardinal/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-1 p-1.5">
              <span className="truncate text-4xs font-medium text-ink/80">
                {block.title}
              </span>
              <span className="rounded bg-ink/10 px-1 py-0.5 text-7 font-semibold text-ink/60">
                copy
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink/10 bg-charcoal px-4 py-2 text-mist/80">
        <span className="text-4xs uppercase tracking-hi text-mist/60">
          shadcn/ui
        </span>
        <span className="text-4xs font-medium">
          Tailwind · Base UI · Radix
        </span>
      </div>
    </div>
  );
}

export function MockupStage({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6 sm:p-8">
      <div className="dotted absolute inset-0 opacity-70" />
      <span
        aria-hidden
        className="mock-layer-0 absolute left-6 top-8 h-2/3 w-2/3 rounded-2xl bg-ink/5"
      />
      <span
        aria-hidden
        className="mock-layer-1 absolute right-4 top-10 h-3/5 w-1/2 rounded-2xl bg-cardinal/20"
      />
      <div className="mock-layer-2 relative">{children}</div>
    </div>
  );
}
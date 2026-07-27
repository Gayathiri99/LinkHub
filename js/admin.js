document.addEventListener('DOMContentLoaded', () => {
  const defaultUsers = JSON.parse(localStorage.getItem("users")) || [];
  const defaultGroups = [
    {
      name: 'Tech Community',
      platform: 'WhatsApp',
      category: 'Technology',
      country:'India',
      state:'TamilNadu',
      district:'Chennai',
      members: 1250,
      status: 'Approved',
      link: 'https://chat.whatsapp.com/example-tech-community'
    },
    {
      name: 'Food recipes',
      platform: 'WhatsApp',
      category: 'Food',
      country:'India',
      state:'AndhraPradesh',
      district:'Guntur',
      members: 1250,
      status: 'Pending',
      link: 'https://chat.whatsapp.com/example-tech-community'
    },
    {
      name: 'Full Stack',
      platform: 'WhatsApp',
      category: 'Education',
      country:'UAE',
      state:'Dubai',
      district:'Dubai',
      members: 120,
      status: 'Pending',
      link: 'https://chat.whatsapp.com/example-tech-community'
    },
    {
      name: 'Job Alert Circle',
      platform: 'Telegram',
      category: 'Jobs',
      country:'India',
      state:'TamilNadu',
      district:'Chennai',
      members: 2400,
      status: 'Pending',
      link: 'https://t.me/examplejobcircle'
    },
  {
    name: 'Full Stack',
    platform: 'WhatsApp',
    category: 'Education',
    country: 'UAE',
    state: 'Dubai',
    district: 'Dubai',
    members: 120,
    status: 'Pending',
    link: 'https://chat.whatsapp.com/example-fullstack'
  },
  {
    name: 'Java Developers',
    platform: 'WhatsApp',
    category: 'Technology',
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Chennai',
    members: 350,
    status: 'Approved',
    link: 'https://chat.whatsapp.com/example-java'
  },
  {
    name: 'Python Coders',
    platform: 'Telegram',
    category: 'Technology',
    country: 'India',
    state: 'Karnataka',
    district: 'Bangalore',
    members: 560,
    status: 'Approved',
    link: 'https://t.me/example-python'
  },
  {
    name: 'UI UX Designers',
    platform: 'Facebook',
    category: 'Design',
    country: 'India',
    state: 'Kerala',
    district: 'Kochi',
    members: 430,
    status: 'Approved',
    link: 'https://facebook.com/groups/uiuxdesigners'
  },
  {
    name: 'Digital Marketing',
    platform: 'Instagram',
    category: 'Business',
    country: 'Singapore',
    state: 'Central',
    district: 'Orchard',
    members: 275,
    status: 'Pending',
    link: 'https://instagram.com/examplemarketing'
  },
  {
    name: 'Data Science',
    platform: 'WhatsApp',
    category: 'Education',
    country: 'USA',
    state: 'California',
    district: 'Los Angeles',
    members: 480,
    status: 'Approved',
    link: 'https://chat.whatsapp.com/example-datascience'
  },
  {
    name: 'AI Enthusiasts',
    platform: 'Telegram',
    category: 'Technology',
    country: 'Canada',
    state: 'Ontario',
    district: 'Toronto',
    members: 670,
    status: 'Approved',
    link: 'https://t.me/example-ai'
  },
  {
    name: 'Startup Founders',
    platform: 'Facebook',
    category: 'Business',
    country: 'UK',
    state: 'England',
    district: 'London',
    members: 820,
    status: 'Approved',
    link: 'https://facebook.com/groups/startupfounders'
  },
  {
    name: 'Photography Club',
    platform: 'Instagram',
    category: 'Photography',
    country: 'Australia',
    state: 'Victoria',
    district: 'Melbourne',
    members: 315,
    status: 'Pending',
    link: 'https://instagram.com/examplephoto'
  },
  {
    name: 'Gaming Zone',
    platform: 'WhatsApp',
    category: 'Gaming',
    country: 'India',
    state: 'Maharashtra',
    district: 'Mumbai',
    members: 710,
    status: 'Approved',
    link: 'https://chat.whatsapp.com/example-gaming'
  },
  {
    name: 'Travel Buddies',
    platform: 'Telegram',
    category: 'Travel',
    country: 'India',
    state: 'Goa',
    district: 'Panaji',
    members: 245,
    status: 'Approved',
    link: 'https://t.me/exampletravel'
  },
  {
    name: 'Fitness Freaks',
    platform: 'Facebook',
    category: 'Health',
    country: 'UAE',
    state: 'Abu Dhabi',
    district: 'Abu Dhabi',
    members: 510,
    status: 'Pending',
    link: 'https://facebook.com/groups/fitnessfreaks'
  },
  {
    name: 'Food Lovers',
    platform: 'Instagram',
    category: 'Food',
    country: 'Malaysia',
    state: 'Selangor',
    district: 'Shah Alam',
    members: 390,
    status: 'Approved',
    link: 'https://instagram.com/examplefood'
  },
  {
    name: 'React Developers',
    platform: 'WhatsApp',
    category: 'Technology',
    country: 'Singapore',
    state: 'Central',
    district: 'Marina Bay',
    members: 600,
    status: 'Approved',
    link: 'https://chat.whatsapp.com/example-react'
  },
  {
    name: 'Machine Learning',
    platform: 'Telegram',
    category: 'Education',
    country: 'Germany',
    state: 'Berlin',
    district: 'Berlin',
    members: 510,
    status: 'Approved',
    link: 'https://t.me/exampleml'
  },
  {
    name: 'Freelancers Hub',
    platform: 'Facebook',
    category: 'Business',
    country: 'India',
    state: 'Delhi',
    district: 'New Delhi',
    members: 900,
    status: 'Approved',
    link: 'https://facebook.com/groups/freelancershub'
  },
  {
    name: 'Canva Creators',
    platform: 'Instagram',
    category: 'Design',
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Coimbatore',
    members: 285,
    status: 'Pending',
    link: 'https://instagram.com/examplecanva'
  },
  {
    name: 'Cloud Computing',
    platform: 'WhatsApp',
    category: 'Technology',
    country: 'India',
    state: 'Telangana',
    district: 'Hyderabad',
    members: 430,
    status: 'Approved',
    link: 'https://chat.whatsapp.com/example-cloud'
  },
  {
    name: 'Job Updates',
    platform: 'Telegram',
    category: 'Career',
    country: 'India',
    state: 'Tamil Nadu',
    district: 'Madurai',
    members: 1200,
    status: 'Approved',
    link: 'https://t.me/examplejobs'
  },
  {
    name: 'Music Lovers',
    platform: 'Facebook',
    category: 'Entertainment',
    country: 'India',
    state: 'Kerala',
    district: 'Trivandrum',
    members: 540,
    status: 'Pending',
    link: 'https://facebook.com/groups/musiclovers'
  }
];

  const defaultCategories = ['Education', 'Business'];

  const storageKeys = {
    users: 'users',
    groups: 'communityhub_groups',
    categories: 'communityhub_categories',
    favorites: 'communityhub_favorite_groups',
    scamReports: 'communityhub_scam_reports'
  };

  const loadData = (key, fallback) => {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return fallback;
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch (error) {
      return fallback;
    }
  };

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getGroupLocation = (group) => {
    const locationParts = [group.district, group.state, group.country]
      .map((part) => part?.toString().trim())
      .filter(Boolean);

    return locationParts.length > 0 ? locationParts.join(', ') : group.location || 'Location not specified';
  };

  const getLoggedInUser = () => {
    try {
      return JSON.parse(localStorage.getItem('loggedInUser'));
    } catch (error) {
      return null;
    }
  };

  const getLoggedInUserName = () => getLoggedInUser()?.name?.trim() || 'CommunityHub User';

  const syncStateFromStorage = () => {
    const storedUsers = loadData(storageKeys.users, defaultUsers);
    const storedGroups = loadData(storageKeys.groups, defaultGroups);
    const storedCategories = loadData(storageKeys.categories, defaultCategories);

    state.users = Array.isArray(storedUsers) ? storedUsers : defaultUsers;
    state.groups = Array.isArray(storedGroups) && storedGroups.length > 0 ? storedGroups : defaultGroups;

    const groupCategories = new Set(
      state.groups.map((group) => group.category).filter(Boolean)
    );
  //   const managedCategories = Array.isArray(storedCategories)
  //     ? storedCategories.filter((category) => Boolean(category) && (defaultCategories.includes(category) || !groupCategories.has(category)))
  //     : defaultCategories;

  //   state.categories = managedCategories.length > 0 ? managedCategories : defaultCategories;
 
  const managedCategories = [
    ...new Set([
        ...defaultCategories,
        ...(Array.isArray(storedCategories) ? storedCategories : [])
    ])
];

state.categories = managedCategories;
 };
  const state = {
    users: [],
    groups: [],
    categories: []
  };

  syncStateFromStorage();

  const isCurrentUserBlocked = () => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (!loggedInUser) return false;

      const matchingUser = state.users.find((user) =>
        user.id === loggedInUser.id || user.phone === loggedInUser.phone
      );
      return matchingUser?.status === 'Blocked';
    } catch (error) {
      return false;
    }
  };

  const updateGroupSubmissionAccess = () => {
    const submitButton = document.getElementById('openGroupModalBtn');
    if (!submitButton) return;

    const isBlocked = isCurrentUserBlocked();
    submitButton.disabled = isBlocked;
    submitButton.title = isBlocked ? 'Your account has been blocked by an administrator.' : '';
    submitButton.textContent = isBlocked ? 'Group Submission Blocked' : 'Submit Group';
  };

  const favoriteGroupKeys = new Set(loadData(storageKeys.favorites, []));
  const scamReports = loadData(storageKeys.scamReports, []);
  const getGroupKey = (group) => `${group.platform}::${group.name}::${group.link || ''}`;
  const reportedGroupKeys = new Set(scamReports.map((report) => report.groupKey));

  const toggleFavorite = (group) => {
    const groupKey = getGroupKey(group);
    if (favoriteGroupKeys.has(groupKey)) {
      favoriteGroupKeys.delete(groupKey);
    } else {
      favoriteGroupKeys.add(groupKey);
    }

    saveData(storageKeys.favorites, [...favoriteGroupKeys]);
    renderHomePage();
  };

  const reportScam = (group) => {
    const groupKey = getGroupKey(group);
    if (reportedGroupKeys.has(groupKey)) return;

    if (!confirm(`Report “${group.name}” as a scam?`)) return;

    scamReports.unshift({
      groupKey,
      group: { ...group },
      reportedAt: new Date().toISOString()
    });
    reportedGroupKeys.add(groupKey);
    saveData(storageKeys.scamReports, scamReports);
    renderHomePage();
    renderAdminDashboard();
  };

  const updateUserProfileMenu = () => {
    const menu = document.getElementById('userProfileMenu');
    const details = document.getElementById('profileDetails');
    const favoritesBadge = document.getElementById('profileFavoritesBadge');
    const user = getLoggedInUser();
    const isRegularUser = localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('isAdmin') !== 'true' && user;

    if (!menu || !details) return;
    menu.hidden = !isRegularUser;
    if (!isRegularUser) return;

    const favoriteCount = state.groups.filter((group) => favoriteGroupKeys.has(getGroupKey(group))).length;
    const createdGroups = state.groups.filter((group) => group.createdBy === user.name);
    const createdGroupsMarkup = createdGroups.length > 0
      ? createdGroups.map((group) => `<li>${group.name}</li>`).join('')
      : '<li>No groups created yet.</li>';

    details.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.phone || ''}</p>
      <p><strong>Groups created:</strong> ${createdGroups.length}</p>
      <ul class="profile-created-groups">${createdGroupsMarkup}</ul>
    `;
    if (favoritesBadge) favoritesBadge.textContent = favoriteCount;
  };

  const initUserProfileMenu = () => {
    const menu = document.getElementById('userProfileMenu');
    const menuButton = document.getElementById('profileMenuBtn');
    const favoritesButton = document.getElementById('profileFavoritesBtn');
    if (!menu || !menuButton) return;

    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    favoritesButton?.addEventListener('click', () => {
      document.querySelector('.nav-links a[data-view="favorites"]')?.click();
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', (event) => {
      if (event.target instanceof Node && !menu.contains(event.target)) {
        menu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  };

  const persistAndNotify = () => {
    saveData(storageKeys.users, state.users);
    saveData(storageKeys.groups, state.groups);
    saveData(storageKeys.categories, state.categories);
    window.dispatchEvent(new Event('communityhub:updated'));
  };

  const initGroupSubmissionModal = () => {
    const openButton = document.getElementById('openGroupModalBtn');
    const backdrop = document.getElementById('groupModalBackdrop');
    const closeButton = document.getElementById('closeGroupModalBtn');
    const form = document.getElementById('submitGroupForm');
    const feedback = document.getElementById('groupSubmissionMessage');

    if (!openButton || !backdrop || !form) return;

    updateGroupSubmissionAccess();

    const closeModal = () => {
      backdrop.hidden = true;
      form.reset();
      if (feedback) feedback.textContent = '';
    };

    const populateCategorySelect = (form) => {
      const categoryField = form?.querySelector('select[name="groupCategory"]');
      if (!categoryField) return;

      const managedCategories = state.categories.filter(Boolean);
      const currentValue = categoryField.value;
      categoryField.innerHTML = '';

      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select a managed category';
      categoryField.appendChild(placeholder);

      managedCategories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryField.appendChild(option);
      });

      if (managedCategories.includes(currentValue)) {
        categoryField.value = currentValue;
      } else if (managedCategories.length > 0) {
        categoryField.value = managedCategories[0];
      }
    };

    openButton.addEventListener('click', () => {
      if (isCurrentUserBlocked()) {
        alert('Your account has been blocked. You cannot submit a group.');
        return;
      }
      backdrop.hidden = false;
      populateCategorySelect(form);
      if (feedback) feedback.textContent = '';
      const firstField = form.querySelector('input, select');
      if (firstField instanceof HTMLInputElement || firstField instanceof HTMLSelectElement) {
        firstField.focus();
      }
    });

    closeButton?.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !backdrop.hidden) {
        closeModal();
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (isCurrentUserBlocked()) {
        if (feedback) feedback.textContent = 'Your account has been blocked. You cannot submit a group.';
        return;
      }
      const formData = new FormData(form);
      const newGroup = {
        name: formData.get('groupName')?.toString().trim(),
        platform: formData.get('groupPlatform')?.toString().trim() || 'WhatsApp',
        category: formData.get('groupCategory')?.toString().trim() || 'General',
        country: formData.get('groupCountry')?.toString().trim(),
        state: formData.get('groupState')?.toString().trim(),
        district: formData.get('groupDistrict')?.toString().trim(),
        members: Number(formData.get('groupMembers')) || 1000,
        link: formData.get('groupLink')?.toString().trim() || '',
        createdBy: getLoggedInUserName(),
        status: 'Pending'
      };

      if (!newGroup.name) return;

      if (!newGroup.category) {
        if (feedback) {
          feedback.textContent = 'Please choose a managed category before submitting.';
        }
        return;
      }

      state.groups.unshift(newGroup);
      persistAndNotify();
      closeModal();
      if (feedback) {
        feedback.textContent = 'Your group has been submitted and is now waiting for admin approval.';
      }
    });
  };

  const populateGroupCategoryOptions = (form) => {
    const categoryField = form?.querySelector('select[name="groupCategory"]');
    if (!categoryField) return;

    const managedCategories = state.categories.filter(Boolean);
    const currentValue = categoryField.value;
    categoryField.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a managed category';
    categoryField.appendChild(placeholder);

    managedCategories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryField.appendChild(option);
    });

    if (managedCategories.includes(currentValue)) {
      categoryField.value = currentValue;
    } else if (managedCategories.length > 0) {
      categoryField.value = managedCategories[0];
    }
  };

  const renderAdminDashboard = () => {
    const totalUsersEl = document.getElementById('totalUsers');
    const totalGroupsEl = document.getElementById('totalGroups');
    const pendingGroupsEl = document.getElementById('pendingGroups');
    const approvedGroupsEl = document.getElementById('approvedGroups');
    const categoriesCountEl = document.getElementById('categoriesCount');
    const usersListEl = document.getElementById('usersList');
    const groupsListEl = document.getElementById('groupsList');
    const categoriesListEl = document.getElementById('categoriesList');
    const scamReportsListEl = document.getElementById('scamReportsList');
    const groupForm = document.getElementById('groupForm');
    const categoryForm = document.getElementById('categoryForm');

    if (totalUsersEl) totalUsersEl.textContent = state.users.length;
    if (totalGroupsEl) totalGroupsEl.textContent = state.groups.length;
    if (pendingGroupsEl) pendingGroupsEl.textContent = state.groups.filter(group => group.status === 'Pending').length;
    if (approvedGroupsEl) approvedGroupsEl.textContent = state.groups.filter(group => group.status === 'Approved').length;
    if (categoriesCountEl) categoriesCountEl.textContent = state.categories.length;

    populateGroupFilters('admin', state.groups, renderAdminDashboard);

    if (usersListEl) {
      usersListEl.innerHTML = '';
      state.users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${user.name}</strong>
          <span class="admin-status">${user.phone}</span>
          <div class="admin-actions">
            <button type="button" data-action="view" data-index="${index}">View</button>
            <button type="button" data-action="block" data-index="${index}">${user.status === 'Blocked' ? 'Unblock' : 'Block'}</button>
            <button type="button" data-action="delete" data-index="${index}">Delete</button>
          </div>
        `;
        usersListEl.appendChild(li);
      });
    }

    if (groupsListEl) {
      groupsListEl.innerHTML = '';
      const filteredGroups = matchesGroupFilters(state.groups, 'admin');
      filteredGroups.forEach((group) => {
        const index = state.groups.indexOf(group);
        const li = document.createElement('li');
        const displayLink = group.link ? `<a href="${group.link}" target="_blank" rel="noopener noreferrer">Open Link</a>` : 'No link';
        li.innerHTML = `
          <strong>${group.name}</strong>
          <span class="admin-status">${group.platform} • ${group.status}</span>
          <span class="admin-status">${getGroupLocation(group)}</span>
          <span class="admin-status">Created by: ${group.createdBy || 'Admin'}</span>
          <div class="admin-status">${displayLink}</div>
          <div class="admin-actions">
            <button type="button" data-action="group-add" data-index="${index}">Add</button>
            <button type="button" data-action="group-edit" data-index="${index}">Edit</button>
            <button type="button" data-action="group-delete" data-index="${index}">Delete</button>
            <button type="button" data-action="group-approve" data-index="${index}">${group.status === 'Approved' ? 'Approved' : 'Approve'}</button>
            <button type="button" data-action="group-reject" data-index="${index}">${group.status === 'Rejected' ? 'Rejected' : 'Reject'}</button>
          </div>
        `;
        groupsListEl.appendChild(li);
      });
    }

    if (categoriesListEl) {
      categoriesListEl.innerHTML = '';
      state.categories.forEach((category, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${category}</strong>
          <div class="admin-actions">
            <button type="button" data-action="category-add" data-index="${index}">Add</button>
            <button type="button" data-action="category-edit" data-index="${index}">Edit</button>
            <button type="button" data-action="category-delete" data-index="${index}">Delete</button>
          </div>
        `;
        categoriesListEl.appendChild(li);
      });
    }

    if (scamReportsListEl) {
      scamReportsListEl.innerHTML = '';
      if (scamReports.length === 0) {
        scamReportsListEl.innerHTML = '<li class="admin-status">No scam reports yet.</li>';
      } else {
        scamReports.forEach((report, index) => {
          const group = report.group || {};
          const reportedDate = report.reportedAt ? new Date(report.reportedAt).toLocaleString() : 'Unknown date';
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>${group.name || 'Unknown group'}</strong>
            <span class="admin-status">${group.platform || 'Unknown platform'} • ${getGroupLocation(group)}</span>
            <span class="admin-status">Created by: ${group.createdBy || 'Admin'}</span>
            <span class="admin-status">Reported: ${reportedDate}</span>
            <div class="admin-actions">
              <button type="button" data-action="scam-dismiss" data-index="${index}">Dismiss Report</button>
            </div>
          `;
          scamReportsListEl.appendChild(li);
        });
      }
    }

    if (groupForm && !groupForm.dataset.bound) {
      groupForm.dataset.bound = 'true';
      groupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(groupForm);
        const newGroup = {
          name: formData.get('groupName')?.toString().trim(),
          platform: formData.get('groupPlatform')?.toString().trim() || 'WhatsApp',
          category: formData.get('groupCategory')?.toString().trim() || 'Technology',
          country: formData.get('groupCountry')?.toString().trim(),
          state: formData.get('groupState')?.toString().trim(),
          district: formData.get('groupDistrict')?.toString().trim(),
          members: Number(formData.get('groupMembers')) || 1000,
          link: formData.get('groupLink')?.toString().trim() || '',
          createdBy: 'Admin',
          status: 'Pending'
        };

        if (!newGroup.name) return;
        state.groups.unshift(newGroup);
        persistAndNotify();
        renderAdminDashboard();
        renderHomePage();
        groupForm.reset();
      });
    }

    if (categoryForm && !categoryForm.dataset.bound) {
      categoryForm.dataset.bound = 'true';
      categoryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(categoryForm);
        const newCategory = formData.get('categoryName')?.toString().trim();
        if (!newCategory) return;
        const category = newCategory.trim();

if (!state.categories.some(c => c.toLowerCase() === category.toLowerCase())) {
    state.categories.push(category);
}
        // state.categories.push(newCategory);
        persistAndNotify();
        renderAdminDashboard();
        renderHomePage();
        categoryForm.reset();
      });
    }
  };

  const getCategoryOptions = () => {
    const categories = new Set();
    state.categories.forEach((category) => {
      if (category) categories.add(category);
    });
    return ['All', ...Array.from(categories).filter(Boolean)];
  };

  const renderCategoryFilter = (platform, filterId) => {
    const filterSelect = document.getElementById(filterId);
    if (!filterSelect) return;

    const categories = getCategoryOptions();
    const currentValue = filterSelect.value || 'All';
    filterSelect.innerHTML = '';

    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      filterSelect.appendChild(option);
    });

    filterSelect.value = categories.includes(currentValue) ? currentValue : 'All';
    filterSelect.onchange = () => renderHomePage();
  };

  const groupFilterFields = [
    { key: 'country', label: 'All countries' },
    { key: 'state', label: 'All states' },
    { key: 'district', label: 'All districts' },
    { key: 'category', label: 'All categories' },
    { key: 'group', label: 'All groups' }
  ];

  const setFilterOptions = (select, placeholder, values) => {
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = '';
    const allOption = document.createElement('option');
    allOption.value = 'All';
    allOption.textContent = placeholder;
    select.appendChild(allOption);

    [...new Set(values.filter(Boolean))]
      .sort((first, second) => first.localeCompare(second))
      .forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });

    select.value = [...select.options].some((option) => option.value === currentValue)
      ? currentValue
      : 'All';
  };

  const getFilterValue = (prefix, key) => document.getElementById(`${prefix}${key[0].toUpperCase()}${key.slice(1)}Filter`)?.value || 'All';

  const matchesGroupFilters = (groups, prefix) => groups.filter((group) => {
    return groupFilterFields.every(({ key }) => {
      const selectedValue = getFilterValue(prefix, key);
      if (selectedValue === 'All') return true;
      const groupValue = key === 'group' ? group.name : group[key];
      return groupValue === selectedValue;
    });
  });

  const populateGroupFilters = (prefix, groups, onChange) => {
    const getSelect = (key) => document.getElementById(`${prefix}${key[0].toUpperCase()}${key.slice(1)}Filter`);
    setFilterOptions(getSelect('country'), 'All countries', groups.map((group) => group.country));
    const selectedCountry = getFilterValue(prefix, 'country');
    setFilterOptions(
      getSelect('state'),
      'All states',
      groups.filter((group) => selectedCountry === 'All' || group.country === selectedCountry).map((group) => group.state)
    );
    const selectedState = getFilterValue(prefix, 'state');
    const locationGroups = groups.filter((group) =>
      (selectedCountry === 'All' || group.country === selectedCountry) &&
      (selectedState === 'All' || group.state === selectedState)
    );
    setFilterOptions(getSelect('district'), 'All districts', locationGroups.map((group) => group.district));
    setFilterOptions(getSelect('category'), 'All categories', locationGroups.map((group) => group.category));
    setFilterOptions(getSelect('group'), 'All groups', matchesGroupFilters(groups, prefix).map((group) => group.name));

    groupFilterFields.forEach(({ key }) => {
      const select = getSelect(key);
      if (select) select.onchange = onChange;
    });
  };

  const shareGroup = async (group) => {
    const groupLink = group.link || window.location.href;
    const shareText = `Join ${group.name} on ${group.platform}. ${getGroupLocation(group)}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: group.name, text: shareText, url: groupLink });
        return;
      }

      await navigator.clipboard.writeText(`${shareText}\n${groupLink}`);
      alert('Group details copied to your clipboard.');
    } catch (error) {
      if (error.name !== 'AbortError') {
        alert('Unable to share this group. Please copy the group link manually.');
      }
    }
  };

  const renderHomePage = () => {
    syncStateFromStorage();
    updateGroupSubmissionAccess();
    updateUserProfileMenu();

    const container = document.getElementById('groupCards');
    const filterSelect = document.getElementById('category');
    const chipsContainer = document.querySelector('.filter-chips');
    const platformContainers = {
      WhatsApp: document.getElementById('whatsappGroupCards'),
      Facebook: document.getElementById('facebookGroupCards'),
      Telegram: document.getElementById('telegramGroupCards'),
      Instagram: document.getElementById('instagramGroupCards')
    };

    const buildGroupCard = (group) => {
      const card = document.createElement('div');
      card.className = 'group-card';
      
      // Highlight favorite groups
if (favoriteGroupKeys.has(getGroupKey(group))) {
    card.classList.add('favorite-card');
} else if (reportedGroupKeys.has(getGroupKey(group))) {
    card.classList.add('reported-card');}
      const joinLink = group.link ? group.link : '#';
      const joinMarkup = group.link
        ? `<a class="group-join-button" href="${joinLink}" target="_blank" rel="noopener noreferrer">Join</a>`
        : '<button type="button">Join</button>';
      card.innerHTML = `
        <div class="card-header">
          <span class="platform ${group.platform.toLowerCase()}">
            <i class="fa-brands fa-${group.platform.toLowerCase() === 'whatsapp' ? 'whatsapp' : group.platform.toLowerCase() === 'telegram' ? 'telegram' : group.platform.toLowerCase() === 'facebook' ? 'facebook-f' : 'instagram'}"></i> ${group.platform}
          </span>
          <span class="category">${group.category}</span>
        </div>
        <h3>${group.name}</h3>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ${getGroupLocation(group)}</p>
        <p class="members"><i class="fa-solid fa-users"></i> ${group.members} Members</p>

        <span class="featured ${group.status.toLowerCase()}">
    <i class="fa-solid fa-star"></i> ${group.status}
</span>
        <div class="group-card-actions">
          ${joinMarkup}
        </div>
      `;
      const shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'share-group-button';
      shareButton.setAttribute('aria-label', 'Share group');
      shareButton.title = 'Share group';
      shareButton.innerHTML = '<i class="fa-solid fa-share-nodes"></i>';
      shareButton.addEventListener('click', () => shareGroup(group));
      const favoriteButton = document.createElement('button');
      const isFavorite = favoriteGroupKeys.has(getGroupKey(group));
      favoriteButton.type = 'button';
      favoriteButton.className = `favorite-group-button${isFavorite ? ' is-favorite' : ''}`;
      favoriteButton.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
      favoriteButton.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
      favoriteButton.innerHTML = isFavorite
        ? '<i class="fa-solid fa-heart"></i>'
        : '<i class="fa-regular fa-heart"></i>';
      favoriteButton.addEventListener('click', () => toggleFavorite(group));

      const reportButton = document.createElement('button');
      const isReported = reportedGroupKeys.has(getGroupKey(group));
      reportButton.type = 'button';
      reportButton.className = 'report-scam-button';
      reportButton.disabled = isReported;
      reportButton.setAttribute('aria-label', isReported ? 'Group reported as scam' : 'Report group as scam');
      reportButton.title = isReported ? 'Group reported as scam' : 'Report group as scam';
      reportButton.innerHTML = isReported
        ? '<i class="fa-solid fa-flag"></i>'
        : '<i class="fa-solid fa-flag"></i>';
      reportButton.addEventListener('click', () => reportScam(group));

      const actions = card.querySelector('.group-card-actions');
      actions?.append(favoriteButton, shareButton, reportButton);
      return card;
    };

    renderCategoryFilter('Home', 'category');
    ['WhatsApp', 'Facebook', 'Telegram', 'Instagram'].forEach((platform) => {
      populateGroupFilters(platform.toLowerCase(), state.groups.filter((group) => group.platform === platform), renderHomePage);
    });

    const groupForm = document.getElementById('groupForm');
    if (groupForm) {
      populateGroupCategoryOptions(groupForm);
    }

    const submitGroupForm = document.getElementById('submitGroupForm');
    if (submitGroupForm) {
      populateGroupCategoryOptions(submitGroupForm);
    }

    const selectedHomeCategory = filterSelect?.value || 'All';
    const visibleHomeGroups = selectedHomeCategory === 'All'
      ? state.groups
      : state.groups.filter((group) => group.category === selectedHomeCategory);

    if (container) {
      container.innerHTML = '';
      if (visibleHomeGroups.length === 0) {
        container.innerHTML = '<p>No groups match this category.</p>';
      } else {
        visibleHomeGroups.forEach((group) => {
          container.appendChild(buildGroupCard(group));
        });
      }
    }

    Object.entries(platformContainers).forEach(([platform, platformContainer]) => {
      if (!platformContainer) return;
      platformContainer.innerHTML = '';
      const filteredGroups = matchesGroupFilters(
        state.groups.filter((group) => group.platform === platform),
        platform.toLowerCase()
      );
      if (filteredGroups.length === 0) {
        platformContainer.innerHTML = `
          <div class="empty-state">
            <h4>No groups yet for ${platform}</h4>
            <p>There are currently no groups available for this category on ${platform}. Please check back later or try another category.</p>
          </div>
        `;
        return;
      }
      filteredGroups.forEach((group) => {
        platformContainer.appendChild(buildGroupCard(group));
      });
    });

    const favoriteGroupCards = document.getElementById('favoriteGroupCards');
    if (favoriteGroupCards) {
      const favoriteGroups = state.groups.filter((group) => favoriteGroupKeys.has(getGroupKey(group)));
      favoriteGroupCards.innerHTML = '';

      if (favoriteGroups.length === 0) {
        favoriteGroupCards.innerHTML = `
          <div class="empty-state">
            <h4>No favorite groups yet</h4>
            <p>Use “Add to Favorites” on any group to save it here.</p>
          </div>
        `;
      } else {
        favoriteGroups.forEach((group) => {
          favoriteGroupCards.appendChild(buildGroupCard(group));
        });
      }
    }

    if (filterSelect) {
      const existingValues = new Set(Array.from(filterSelect.options).map(option => option.value));
      const categoriesToAdd = state.categories.filter(category => !existingValues.has(category));
      categoriesToAdd.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterSelect.appendChild(option);
      });
    }

    if (chipsContainer) {
      const categories = state.categories.map((category) => category.toLowerCase());
      const currentButtons = Array.from(chipsContainer.querySelectorAll('.chip'));
      currentButtons.forEach((button) => {
        if (button.textContent?.trim() === 'All') return;
        if (!categories.includes(button.textContent?.trim().toLowerCase())) {
          button.remove();
        }
      });
      state.categories.forEach((category) => {
        if (!Array.from(chipsContainer.querySelectorAll('.chip')).some((button) => button.textContent?.trim() === category)) {
          const chip = document.createElement('button');
          chip.className = 'chip';
          chip.textContent = category;
          chipsContainer.appendChild(chip);
        }
      });
    }
  };

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.getAttribute('data-action');
    const index = Number(target.getAttribute('data-index'));

    if (!action || Number.isNaN(index)) return;

    if (action === 'scam-dismiss') {
      const [dismissedReport] = scamReports.splice(index, 1);
      if (dismissedReport) {
        reportedGroupKeys.delete(dismissedReport.groupKey);
        saveData(storageKeys.scamReports, scamReports);
        renderAdminDashboard();
        renderHomePage();
      }
      return;
    }

    if (action === 'view') {
      const user = state.users[index];
      if (user) {
        alert(`Viewing user: ${user.name}\nStatus: ${user.status}`);
      }
      return;
    }

    if (action === 'block') {
      const user = state.users[index];
      if (user) {
        user.status = user.status === 'Blocked' ? 'Active' : 'Blocked';
        persistAndNotify();
        renderAdminDashboard();
      }
      return;
    }

    if (action === 'delete') {
      state.users.splice(index, 1);
      persistAndNotify();
      renderAdminDashboard();
      return;
    }

    if (action === 'group-add') {
      const group = state.groups[index];
      if (group) {
        const newName = prompt('Enter a new group name', group.name);
        if (newName) {
          group.name = newName.trim();
          persistAndNotify();
          renderAdminDashboard();
          renderHomePage();
        }
      }
      return;
    }

    if (action === 'group-edit') {
      const group = state.groups[index];
      if (group) {
        const newName = prompt('Edit group name', group.name);
        if (newName) {
          group.name = newName.trim();
          persistAndNotify();
          renderAdminDashboard();
          renderHomePage();
        }
      }
      return;
    }

    if (action === 'group-delete') {
      state.groups.splice(index, 1);
      persistAndNotify();
      renderAdminDashboard();
      renderHomePage();
      return;
    }

    if (action === 'group-approve') {
      const group = state.groups[index];
      if (group) {
        group.status = group.status === 'Approved' ? 'Pending' : 'Approved';
        persistAndNotify();
        renderAdminDashboard();
        renderHomePage();
      }
      return;
    }

    if (action === 'group-reject') {
      const group = state.groups[index];
      if (group) {
        group.status = group.status === 'Rejected' ? 'Pending' : 'Rejected';
        persistAndNotify();
        renderAdminDashboard();
        renderHomePage();
      }
      return;
    }

    if (action === 'category-add') {
      const newCategory = prompt('Enter a new category name');
      if (newCategory) {
        state.categories.push(newCategory.trim());
        persistAndNotify();
        renderAdminDashboard();
        renderHomePage();
      }
      return;
    }

    if (action === 'category-edit') {
      const current = state.categories[index];
      if (current) {
        const updated = prompt('Edit category name', current);
        if (updated) {
          state.categories[index] = updated.trim();
          persistAndNotify();
          renderAdminDashboard();
          renderHomePage();
        }
      }
      return;
    }

    if (action === 'category-delete') {
      state.categories.splice(index, 1);
      persistAndNotify();
      renderAdminDashboard();
      renderHomePage();
    }
  });

  window.addEventListener('storage', () => {
    syncStateFromStorage();
    renderAdminDashboard();
    renderHomePage();
  });

  window.addEventListener('communityhub:updated', () => {
    renderAdminDashboard();
    renderHomePage();
  });

  // ═══════════════════════════════════════════════════════
  // Hero Search — searches across name, category, platform, location
  // ═══════════════════════════════════════════════════════

  const initHeroSearch = () => {
    const heroInput = document.getElementById('heroSearchInput');
    const heroBtn = document.getElementById('heroSearchBtn');
    const searchResultsSection = document.getElementById('searchResults');
    const searchResultCards = document.getElementById('searchResultCards');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (!heroInput || !heroBtn) return;

    const performSearch = () => {
      const query = heroInput.value.trim().toLowerCase();

      // If query is empty, clear search results
      if (!query) {
        clearSearch();
        return;
      }

      // Search across all group fields
      const results = state.groups.filter((group) => {
        const searchableFields = [
          group.name,
          group.category,
          group.platform,
          group.country,
          group.state,
          group.district
        ].map((field) => (field || '').toLowerCase());

        // Match if any field contains the query
        return searchableFields.some((field) => field.includes(query));
      });

      // Show search results section
      if (searchResultsSection) {
        searchResultsSection.style.display = '';
        searchResultsSection.classList.remove('hidden-section');
      }

      // Update info text
      if (searchResultsInfo) {
        searchResultsInfo.textContent = results.length > 0
          ? `Found ${results.length} group${results.length !== 1 ? 's' : ''} matching "${heroInput.value.trim()}"`
          : `No groups found matching "${heroInput.value.trim()}"`;
      }

      // Render result cards
      if (searchResultCards) {
        searchResultCards.innerHTML = '';
        if (results.length === 0) {
          searchResultCards.innerHTML = `
            <div class="empty-state">
              <h4>No groups found</h4>
              <p>Try a different search term — you can search by group name, category, platform, or location.</p>
            </div>
          `;
        } else {
          results.forEach((group) => {
            searchResultCards.appendChild(buildGroupCardGlobal(group));
          });
        }
      }

      // Smooth scroll to search results
      searchResultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const clearSearch = () => {
      heroInput.value = '';
      if (searchResultsSection) {
        searchResultsSection.style.display = 'none';
      }
      if (searchResultCards) {
        searchResultCards.innerHTML = '';
      }
      if (searchResultsInfo) {
        searchResultsInfo.textContent = '';
      }
    };

    // Click handler
    heroBtn.addEventListener('click', performSearch);

    // Enter key handler
    heroInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
      }
    });

    // Clear search button
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        clearSearch();
        // Scroll back to hero
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  // Helper: build a group card using the same buildGroupCard logic (exposed for search)
  const buildGroupCardGlobal = (group) => {
    const card = document.createElement('div');
    card.className = 'group-card';

    if (favoriteGroupKeys.has(getGroupKey(group))) {
      card.classList.add('favorite-card');
    } else if (reportedGroupKeys.has(getGroupKey(group))) {
      card.classList.add('reported-card');
    }

    const joinLink = group.link ? group.link : '#';
    const joinMarkup = group.link
      ? `<a class="group-join-button" href="${joinLink}" target="_blank" rel="noopener noreferrer">Join</a>`
      : '<button type="button">Join</button>';

    card.innerHTML = `
      <div class="card-header">
        <span class="platform ${group.platform.toLowerCase()}">
          <i class="fa-brands fa-${group.platform.toLowerCase() === 'whatsapp' ? 'whatsapp' : group.platform.toLowerCase() === 'telegram' ? 'telegram' : group.platform.toLowerCase() === 'facebook' ? 'facebook-f' : 'instagram'}"></i> ${group.platform}
        </span>
        <span class="category">${group.category}</span>
      </div>
      <h3>${group.name}</h3>
      <p class="location"><i class="fa-solid fa-location-dot"></i> ${getGroupLocation(group)}</p>
      <p class="members"><i class="fa-solid fa-users"></i> ${group.members} Members</p>
      <span class="featured ${group.status.toLowerCase()}">
        <i class="fa-solid fa-star"></i> ${group.status}
      </span>
      <div class="group-card-actions">
        ${joinMarkup}
      </div>
    `;

    const shareButton = document.createElement('button');
    shareButton.type = 'button';
    shareButton.className = 'share-group-button';
    shareButton.setAttribute('aria-label', 'Share group');
    shareButton.title = 'Share group';
    shareButton.innerHTML = '<i class="fa-solid fa-share-nodes"></i>';
    shareButton.addEventListener('click', () => shareGroup(group));

    const favoriteButton = document.createElement('button');
    const isFavorite = favoriteGroupKeys.has(getGroupKey(group));
    favoriteButton.type = 'button';
    favoriteButton.className = `favorite-group-button${isFavorite ? ' is-favorite' : ''}`;
    favoriteButton.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
    favoriteButton.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
    favoriteButton.innerHTML = isFavorite
      ? '<i class="fa-solid fa-heart"></i>'
      : '<i class="fa-regular fa-heart"></i>';
    favoriteButton.addEventListener('click', () => toggleFavorite(group));

    const reportButton = document.createElement('button');
    const isReported = reportedGroupKeys.has(getGroupKey(group));
    reportButton.type = 'button';
    reportButton.className = 'report-scam-button';
    reportButton.disabled = isReported;
    reportButton.setAttribute('aria-label', isReported ? 'Group reported as scam' : 'Report group as scam');
    reportButton.title = isReported ? 'Group reported as scam' : 'Report group as scam';
    reportButton.innerHTML = '<i class="fa-solid fa-flag"></i>';
    reportButton.addEventListener('click', () => reportScam(group));

    const actions = card.querySelector('.group-card-actions');
    actions?.append(favoriteButton, shareButton, reportButton);
    return card;
  };

  // ═══════════════════════════════════════════════════════
  // Filter Section Search Button — applies dropdown filters
  // ═══════════════════════════════════════════════════════

  const initFilterSearch = () => {
    const filterSearchBtn = document.getElementById('filterSearchBtn');
    if (!filterSearchBtn) return;

    filterSearchBtn.addEventListener('click', () => {
      const countrySelect = document.getElementById('country');
      const stateSelect = document.getElementById('state');
      const districtSelect = document.getElementById('district');
      const categorySelect = document.getElementById('category');

      const selectedCountry = countrySelect?.value || '';
      const selectedState = stateSelect?.value || '';
      const selectedDistrict = districtSelect?.value || '';
      const selectedCategory = categorySelect?.value || 'All';

      // Filter groups based on dropdown selections
      const results = state.groups.filter((group) => {
        if (selectedCountry && group.country !== selectedCountry) return false;
        if (selectedState && group.state !== selectedState) return false;
        if (selectedDistrict && group.district !== selectedDistrict) return false;
        if (selectedCategory && selectedCategory !== 'All' && group.category !== selectedCategory) return false;
        return true;
      });

      // Show search results section
      const searchResultsSection = document.getElementById('searchResults');
      const searchResultCards = document.getElementById('searchResultCards');
      const searchResultsInfo = document.getElementById('searchResultsInfo');

      if (searchResultsSection) {
        searchResultsSection.style.display = '';
        searchResultsSection.classList.remove('hidden-section');
      }

      // Build descriptive filter text
      const activeFilters = [];
      if (selectedCountry) activeFilters.push(selectedCountry);
      if (selectedState) activeFilters.push(selectedState);
      if (selectedDistrict) activeFilters.push(selectedDistrict);
      if (selectedCategory && selectedCategory !== 'All') activeFilters.push(selectedCategory);
      const filterText = activeFilters.length > 0 ? activeFilters.join(', ') : 'all filters';

      if (searchResultsInfo) {
        searchResultsInfo.textContent = results.length > 0
          ? `Found ${results.length} group${results.length !== 1 ? 's' : ''} matching ${filterText}`
          : `No groups found matching ${filterText}`;
      }

      if (searchResultCards) {
        searchResultCards.innerHTML = '';
        if (results.length === 0) {
          searchResultCards.innerHTML = `
            <div class="empty-state">
              <h4>No groups found</h4>
              <p>Try adjusting your filter selections to find communities.</p>
            </div>
          `;
        } else {
          results.forEach((group) => {
            searchResultCards.appendChild(buildGroupCardGlobal(group));
          });
        }
      }

      searchResultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  // ═══════════════════════════════════════════════════════
  // Chip Category Quick Filter
  // ═══════════════════════════════════════════════════════

  const initChipFilters = () => {
    const chipsContainer = document.querySelector('.filter-chips');
    if (!chipsContainer) return;

    chipsContainer.addEventListener('click', (event) => {
      const chip = event.target.closest('.chip');
      if (!chip) return;

      // Update active state
      chipsContainer.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      const selectedCategory = chip.textContent?.trim();

      // Update the category dropdown to match
      const categorySelect = document.getElementById('category');
      if (categorySelect) {
        const matchOption = [...categorySelect.options].find(
          (opt) => opt.textContent.trim().toLowerCase() === (selectedCategory || '').toLowerCase()
        );
        if (matchOption) {
          categorySelect.value = matchOption.value;
        } else {
          categorySelect.value = '';
        }
      }

      // Re-render home page with filtered category
      renderHomePage();
    });
  };

  initGroupSubmissionModal();
  initUserProfileMenu();
  initHeroSearch();
  initFilterSearch();
  initChipFilters();
  renderAdminDashboard();
  renderHomePage();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const teamMembers = [
        {
            src: 'img/profile-pic.jpg',
            name: 'Yorlin Quispe Ygnacio',
            alias: '@Yorlin',
            mail: 'yquispe@travel.pe',
            status: 'Active',
            tags: ['dev', 'QA']
        }
    ];

    let tableRowCount = document.getElementsByClassName('table-row-count');
    if (tableRowCount.length > 0) {
        tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
    }

    let tableBody = document.getElementById('team-member-rows');
    if (!tableBody) {
        console.error('El elemento con id "team-member-rows" no se encontró en el DOM.');
        return;
    }

    const itemsOnPage = 5;
    const numberOfPage = Math.ceil(teamMembers.length / itemsOnPage);

    const start = (new URLSearchParams(window.location.search)).get('page') || 1;

    const mappedRecords = teamMembers
        .filter((_, i) => (start - 1) * itemsOnPage <= i && i < start * itemsOnPage)
        .map((teamMember) => {
            return `<tr>
                <td class="team-member-profile">
                    <img src="${teamMember.src}" alt="${teamMember.name}">
                    <span class="profile-info">
                        <span class="profile-info__name">
                            ${teamMember.name}
                        </span>
                        <span class="profile-info__alias">
                            ${teamMember.alias}
                        </span>
                    </span>
                </td>
                <td>
                    <span class="status status--${teamMember.status}">
                        ${teamMember.status}
                    </span>
                </td>
                <td>${teamMember.mail}</td> <!-- Corregido a "mail" -->
                <td>
                    <span class="tags">
                        ${teamMember.tags
                            .map((tag) => 
                                `<span class="tag tag--${tag}">
                                    ${tag}
                                </span>`
                            )
                            .join('')}
                    </span>
                </td>
            </tr>`;
        });

    tableBody.innerHTML = mappedRecords.join('');

    const pagination = document.querySelector('.pagination');
    if (pagination) {
        const linkList = [];

        for (let i = 0; i < numberOfPage; i++) {
            const pageNumber = i + 1;
            linkList.push(
                `<li>
                    <a
                        href="?page=${pageNumber}"
                        ${pageNumber == start ? 'class="active"' : ""}
                        title="page ${pageNumber}"
                    >
                        ${pageNumber}
                    </a>
                </li>`
            );
        }

        pagination.innerHTML = linkList.join("");
    }
});
